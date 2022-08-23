from rest_framework.routers import DefaultRouter
from .views import UploadFileViewset
from django.urls import path, include

router = DefaultRouter()
router.register(r'uploads', UploadFileViewset, basename='uploads')

urlpatterns = [
    path('', include(router.urls)),
]
