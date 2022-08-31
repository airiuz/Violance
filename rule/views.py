from django.http import HttpResponse, StreamingHttpResponse
from django.shortcuts import render, get_object_or_404
from django.template.defaulttags import csrf_token
from django.views import View
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UploadFile
from .serializers import UploadFileSerializers
from main import stream
from pathlib import Path
import json


# BASE_DIR = Path(__file__).resolve().parent.parent
#
#
class UploadFileView(APIView):

    def post(self, request):
        serializer = UploadFileSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        upload_file = serializer.save()
        return HttpResponse(json.dumps({
            "id": upload_file.id,
            "name": upload_file.name,
        }), content_type='application/json')


def streamvideo(request, video_id):
    upload_file = get_object_or_404(UploadFile, pk=video_id)

    return StreamingHttpResponse(stream(path=upload_file.videofile.path),
                                 content_type='multipart/x-mixed-replace; boundary=frame')
