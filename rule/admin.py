from django.contrib import admin
from .models import Violence, UploadFile

# Register your models here.

admin.site.register(UploadFile)
admin.site.register(Violence)
