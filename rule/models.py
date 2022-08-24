from django.db import models


# Create your models here.

class UploadFile(models.Model):
    name = models.CharField(max_length=200)
    videofile = models.FileField(upload_to='ideo/', null=True)

    def __str__(self):
        return self.name


class Violence(models.Model):
    frame = models.ImageField()
    numbers_car_frame = models.ImageField()
    numbers_car = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now=True)
