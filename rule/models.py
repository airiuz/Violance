from django.db import models


# Create your models here.

class UploadFile(models.Model):
    name = models.CharField(max_length=200)
    videofile = models.FileField(upload_to='video/', null=True)

    def __str__(self):
        return self.name
