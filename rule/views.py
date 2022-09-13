from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer

from django.http import HttpResponse, StreamingHttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UploadFile
from .serializers import UploadFileSerializers
from main import stream
from pathlib import Path
import json

channel_layer = get_channel_layer()


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

    # async_to_sync(channel_layer.send)('rule', {
    #     'type': 'process',
    #     'video_id': video_id,
    # })

    return StreamingHttpResponse(stream(path=upload_file.videofile.path, upload=upload_file),
                                 content_type='multipart/x-mixed-replace; boundary=frame')


class GetViolenceView(APIView):
    def get(self, request, pk=None):
        async_to_sync(channel_layer.send)('rule', {
            'type': 'process',
            'video_id': pk,
        })
        return Response(data={'connect': True}, status=204)
