import os

from channels.routing import ProtocolTypeRouter, ChannelNameRouter
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

django_asgi_app = get_asgi_application()

from rule.consumers import UploadFileConsumer
import realtime.routing

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": AllowedHostsOriginValidator(
        AuthMiddlewareStack(
            URLRouter(
                realtime.routing.websocket_urlpatterns
            )
        )
    ),
    "channel": ChannelNameRouter({
        "rule": UploadFileConsumer.as_asgi(),
    })
})
