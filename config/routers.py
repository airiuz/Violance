from rest_framework.routers import DefaultRouter


class CustomRouter(DefaultRouter):
    def __init__(self, *args, **kwargs):
        if 'root_view_name' in kwargs:
            self.root_view_name = kwargs.pop('root_view_name')
        super().__init__(*args, **kwargs)
