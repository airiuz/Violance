from rest_framework.viewsets import ModelViewSet
from .models import UploadFile
from .serializers import UploadFileSerializers


class UploadFileViewset(ModelViewSet):
    queryset = UploadFile.objects.all()
    serializer_class = UploadFileSerializers
