import asyncio

from datetime import datetime

from channels.consumer import AsyncConsumer
from channels.db import database_sync_to_async

from .models import get_by_slug, get_by_id_last_violence, Violence


class UploadFileConsumer(AsyncConsumer):

    async def process(self, message):
        print("keldi")
        await asyncio.sleep(5)

        video_id = message.get('video_id')
        upload_data = await database_sync_to_async(get_by_slug)(video_id)
        await self.channel_layer.group_send(
            f'{video_id}',
            {
                'type': 'ws.chat',
                'message': "Reading the file"
            }
        )
        print(upload_data.id)
        # print(s)

        violence = await database_sync_to_async(get_by_id_last_violence)(upload_data)
        # for violence in violences:
        await self.channel_layer.group_send(
            f"{video_id}",
            {
                'type': 'ws.data',
                'data': {
                    'frame': violence.frame,
                    'numbers_car_frame': violence.numbers_car_frame,
                    'numbers_car': violence.numbers_car,
                    'type': violence.type,
                    'created_at': violence.created_at,
                }
            }
        )
