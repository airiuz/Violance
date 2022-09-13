from django.db import models
from django.shortcuts import get_object_or_404


# Create your models here.

class UploadFile(models.Model):
    name = models.CharField(max_length=200)
    videofile = models.FileField(upload_to='upload/', null=True)

    def __str__(self):
        return self.name


class Violence(models.Model):
    frame = models.ImageField()
    numbers_car_frame = models.ImageField()
    numbers_car = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now=True)
    uploaded_file = models.ForeignKey(UploadFile, on_delete=models.SET_NULL, null=True, related_name='violences')


def get_by_slug(audio_slug):
    return get_object_or_404(UploadFile, pk=audio_slug)


def get_by_id_last_violence(upload):
    violences = Violence.objects.filter(uploaded_file=upload).first()
    return violences
