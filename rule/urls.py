from .views import streamvideo, UploadFileView, GetViolenceView
from django.urls import path, include

urlpatterns = [
    path('', UploadFileView.as_view(), name='upload'),
    path('<int:video_id>/', streamvideo, name='stream'),
    path('<int:pk>/violence/', GetViolenceView.as_view(), name='violence'),
]
