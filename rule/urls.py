from .views import UploadFileViewset
from django.urls import path, include


urlpatterns = [
    path('', UploadFileViewset.as_view(), name='uploads'),
]
