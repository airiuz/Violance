import torch
import cv2
from paddleocr import PaddleOCR
import math
from rule.models import Violence


class Violance_Detection:
    # -----------------------------------------------Konstruktor-----------------------------------------------#
    def __init__(self):
        self.son = 0

    # ---------------------------------------------------------------------------------------------------------#

    # -------------------------------Freymdagi barcha obyektlarni aniqlab beradi-------------------------------#
    def detect_objects(self, bboxes, label):

        detection = []

        for i in range(len(bboxes)):
            x1, y1, x2, y2 = bboxes.T[i][:4]

            if bboxes.T[i][6] == label and bboxes.T[i][4] > 0.7:
                detection.append([[x1, y1, x2, y2], bboxes.T[i][4], bboxes.T[i][5], label])
                # cv2.rectangle(frame,(x1,y1),(x2,y2),(0,255,0),1)
        return detection

    # ---------------------------------------------------------------------------------------------------------#

    # --------------------Avtomobil rasmidan nomer joylashgan joyni aniqlab beradi--------------------#
    def number_plate_detector(self, car, model):

        pred = model(car)

        coord_cls = pred.xyxy[0].cpu().numpy()

        coords = coord_cls[:, :4]
        coords = coords.astype(int)

        return coords

    # ------------------------------------------------------------------------------------------------#

    # -------------Freymdagi barcha avtomobillar nomer joylashgan joylarini aniqlab beradi-------------#
    def number_plate_detect_all(self, transports, frame, model):
        result, yk, xq = None, None, None
        height, width = frame.shape[:2]
        for transport in transports:
            bbox, conf, num, name = transport[0], transport[1], transport[2], transport[3]

            automobile = frame[int(bbox[1]):int(bbox[3]), int(bbox[0]):int(bbox[2])]

            plate_coord = self.number_plate_detector(automobile, model)
            if len(plate_coord) > 0:
                x1, y1 = plate_coord[-1, :2]
                x2, y2 = plate_coord[-1, 2:]

                number_plate = automobile[y1:y2, x1:x2]
                if x2 < width and y2 < height:
                    xq = str(y1) + " " + str(y2)
                    xk = abs(x1 - x2)
                    yk = abs(y1 - y2)
                    cv2.rectangle(frame, (x1 + int(bbox[0]), y1 + int(bbox[1])),
                                  (x1 + int(bbox[0]) + xk, y1 + int(bbox[1]) + yk), (0, 0, 255), 1)
                    if result is None:
                        result = yk

        return yk

    # -------------------------------------------------------------------------------------------------#

    # ------------------Nomer turgan joylashgan joydan davlat raqamini aniqlab beradi------------------#
    def number_recognition(self, number_plate, ocr):

        result = ocr.ocr(number_plate, cls=True)

        txts = [line[1][0] for line in result]

        if len(txts) > 0:
            return txts[0]

        return ""

    # -------------------------------------------------------------------------------------------------#

    # -------------------------------Zebra y koordinatani aniqlab beradi-------------------------------#
    def get_y_from_zebra(self, model, frame):
        height, width = frame.shape[:2]
        pred = model(frame).pandas().xyxy[0].to_numpy()
        y = int(min(pred[:, 1]))
        for i in range(len(pred)):
            cv2.rectangle(frame, (int(pred[i, 0]), int(pred[i, 1])), (int(pred[i, 2]), int(pred[i, 3])), (255, 0, 0), 1)

        return y

    # -------------------------------------------------------------------------------------------------#

    # -----------------------------------Virtual liniya chizib beradi-----------------------------------#
    def set_red_line(self, y_zebra, y, frame):
        width, height = frame.shape[:2]

        metrics = int(y * 20 * math.sin(math.pi / 3))

        cv2.line(frame, (0, int(y_zebra - metrics)), (int(height), int(y_zebra - metrics)), (0, 255, 0), 3)

    # -------------------------------------------------------------------------------------------------#

    # ----------------------Qizil chiziqdan o'tgan va qoida buzgan mashinani nomerini qaytaradi-------------------------#
    def violation_cars_numbers(self, frame, people_half_frame, transports, y_zebra, model_np, ocr, upload):
        count = 0
        for person in people_half_frame:
            count += 1

        for transport in transports:
            bbox, conf, num, name = transport[0], transport[1], transport[2], transport[3]

            if bbox[1] < y_zebra and y_zebra < bbox[3] and count >= 1:
                automobile = frame[int(bbox[1]):int(bbox[3]), int(bbox[0]):int(bbox[2])]
                plate_coord = self.number_plate_detector(automobile, model_np)

                if len(plate_coord) > 0:
                    x1, y1 = plate_coord[-1, :2]
                    x2, y2 = plate_coord[-1, 2:]

                    xk = abs(x1 - x2)
                    yk = abs(y1 - y2)

                    plate = frame[y1 + int(bbox[1]):y1 + int(bbox[1]) + yk, x1 + int(bbox[0]):x1 + int(bbox[0]) + xk]
                    plate_number = self.number_recognition(plate, ocr)
                    if len(plate_number) == 8:
                        try:
                            a = Violence.objects.get(frame=path)
                            a.first()
                        except:
                            path = f"violance qoidabuzarlar/violation_car/rasm{self.son}.jpg"
                            path_number = f"violance qoidabuzarlar/violation_car/np{self.son}.jpg"
                            cv2.imwrite(path, frame)
                            cv2.imwrite(path_number, plate)
                            self.son += 1
                            Violence.objects.create(
                                frame=path,
                                numbers_car_frame=path_number,
                                numbers_car=plate_number,
                                type='zebra',
                                uploaded_file=upload
                            )
