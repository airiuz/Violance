import torch
import cv2
from paddleocr import PaddleOCR
from Violance import Violance_Detection


# def main(path):
#     # Object detection for 2 classes: 'transport' and 'odam'
#     model = torch.hub.load('ultralytics/yolov5', 'custom', 'models/310_best.pt')
#     model_np = torch.hub.load('ultralytics/yolov5', 'custom', 'models/number_plate.pt')
#     model_zebra = torch.hub.load('ultralytics/yolov5', 'custom', 'models/zebra100.pt')
#
#     # Video Capture 0 for web camera and link for upload
#     video = cv2.VideoCapture(path)
#     ocr = PaddleOCR(use_angle_cls=True, lang='en')
#
#     ob = Violance_Detection()
#     width = video.get(3)
#     height = video.get(4)
#
#     y_zebra = None
#     plate_coord = None
#     while True:
#
#         ret, frame = video.read()
#         result = model(frame)
#
#         bboxes = result.pandas().xyxy[0]
#
#         transports = ob.detect_objects(bboxes, 'transport')
#         people = ob.detect_objects(bboxes, 'odam')
#
#         half_frame = frame[int(height // 2):int(height), :]
#
#         result_half_frame = model(half_frame)
#
#         bboxes_half_frame = result_half_frame.pandas().xyxy[0]
#
#         transports_half_frame = ob.detect_objects(bboxes_half_frame, 'transport')
#         people_half_frame = ob.detect_objects(bboxes_half_frame, 'odam')
#
#         # ------- Barcha number plate larni aniqlash ------- #
#         """
#         if len(transports)>0:
#             a=ob.number_plate_detect_all(transports,frame,model_np)
#         """
#
#         # ------- Liniya chizish ------- #
#         # cv2.line(frame,(0,int(y_zebra)),(int(width),int(y_zebra)),(0,255,0),3)
#         if y_zebra is None and len(transports_half_frame) == 0 and len(people_half_frame) == 0:
#             y_zebra = ob.get_y_from_zebra(model_zebra, frame)
#
#         if plate_coord is None and len(transports_half_frame) > 0:
#             plate_coord = ob.number_plate_detect_all(transports_half_frame, half_frame, model_np)
#
#         if y_zebra is not None and plate_coord is not None:
#             ob.set_red_line(y_zebra, plate_coord, frame)
#
#             cv2.line(frame, (0, int(y_zebra)), (int(width), int(y_zebra)), (0, 255, 0), 1)
#
#         # ------- Qoidabuzarlikni aniqlash ------- #
#
#         if y_zebra is not None:
#             ob.violation_cars_numbers(frame, people_half_frame, transports, y_zebra, model_np, ocr)
#
#         frame_flip = cv2.flip(frame, 1)
#         ret, jpeg = cv2.imencode('.jpg', frame_flip)
#         yield jpeg.tobytes()
#
#         # cv2.imshow("Frame", frame)
#         # if cv2.waitKey(25) & 0xFF == ord('q'):
#         #     break
#
#     video.release()
#     cv2.destroyAllWindows()


# Object detection for 2 classes: 'transport' and 'odam'

def stream(path, upload):
    model = torch.hub.load('ultralytics/yolov5', 'custom', 'models/310_best.pt')
    model_np = torch.hub.load('ultralytics/yolov5', 'custom', 'models/number_plate.pt')
    model_zebra = torch.hub.load('ultralytics/yolov5', 'custom', 'models/zebra100.pt')

    ob = Violance_Detection()
    ocr = PaddleOCR(use_angle_cls=True, lang='en')

    # Video Capture 0 for web camera and link for upload
    video = cv2.VideoCapture(path)

    width = video.get(3)
    height = video.get(4)

    y_zebra = 100
    plate_coord = None
    while True:
        ret, frame = video.read()
        result = model(frame)
        if result is not None:
            pass
        bboxes = result.pandas().xyxy[0]

        transports = ob.detect_objects(bboxes, 'transport')
        people = ob.detect_objects(bboxes, 'odam')

        half_frame = frame[int(height // 2):int(height), :]

        result_half_frame = model(half_frame)

        bboxes_half_frame = result_half_frame.pandas().xyxy[0]

        transports_half_frame = ob.detect_objects(bboxes_half_frame, 'transport')
        people_half_frame = ob.detect_objects(bboxes_half_frame, 'odam')

        # ------- Barcha number plate larni aniqlash ------- #
        """
        if len(transports)>0:
            a=ob.number_plate_detect_all(transports,frame,model_np)
        """

        # ------- Liniya chizish ------- #
        cv2.line(frame, (0, int(y_zebra)), (int(width), int(y_zebra)), (0, 255, 0), 3)
        if y_zebra is None and len(transports_half_frame) == 0 and len(people_half_frame) == 0:
            y_zebra = ob.get_y_from_zebra(model_zebra, frame)

        if plate_coord is None and len(transports_half_frame) > 0:
            plate_coord = ob.number_plate_detect_all(transports_half_frame, half_frame, model_np)

        if y_zebra is not None and plate_coord is not None:
            # ob.set_red_line(y_zebra, plate_coord, frame)
            pass
            # cv2.line(frame, (0, int(y_zebra)), (int(width), int(y_zebra)), (0, 255, 0), 1)

        # ------- Qoidabuzarlikni aniqlash ------- #

        if y_zebra is not None:
            ob.violation_cars_numbers(frame, people_half_frame, transports, y_zebra, model_np, ocr, upload)

        # frame_flip = cv2.flip(frame, 1)

        scale_percent = 20  # percent of original size

        width1 = int(frame.shape[1] * scale_percent / 100)
        height1 = int(frame.shape[0] * scale_percent / 100)
        dim = (width1, height1)

        # resize image
        resizedd = cv2.resize(frame, dim, interpolation=cv2.INTER_AREA)

        ret, jpeg = cv2.imencode('.jpg', resizedd)

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + jpeg.tobytes() + b'\r\n\r\n')

    video.release()
    cv2.destroyAllWindows()
