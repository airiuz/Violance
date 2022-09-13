import asyncio

from channels.generic.websocket import AsyncWebsocketConsumer
import json
from channels.db import database_sync_to_async


class MyConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        await asyncio.sleep(5)
        self.audio_slug = self.scope['url_route']['kwargs']['slug']

        # Join room group
        await self.channel_layer.group_add(
            self.audio_slug,
            self.channel_name
        )

        await self.accept()

        await self.send(text_data=json.dumps({
            'type': 'chat',
            'message': 'Connected.'
        }))

    async def ws_chat(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'type': 'chat',
            'message': event['message']
        }))

    # Receive message from room group
    async def ws_data(self, event):
        # Send data to WebSocket
        await self.send(text_data=json.dumps({
            'type': 'data',
            'data': event['data']
        }))

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.audio_slug,
            self.channel_name
        )
