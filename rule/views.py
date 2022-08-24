from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UploadFile
from .serializers import UploadFileSerializers
from main import main
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent


class UploadFileViewset(APIView):

    def post(self, request):
        serializer = UploadFileSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        video = serializer.data["videofile"]
        path = str(BASE_DIR)
        path = path.replace("\\", '/')
        print(video)
        path = path + video
        # path = path.replace('/', "\\" )
        print(path == 'D:/peshexod2/media/ideo/New_project13.mp4')
        main(path=path)
        return Response(data=serializer.data)
