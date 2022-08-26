from .views import streamvideo, UploadFileView
from django.urls import path, include

urlpatterns = [
    path('', UploadFileView.as_view(), name='upload'),
    path('<int:video_id>/', streamvideo, name='stream'),
]
