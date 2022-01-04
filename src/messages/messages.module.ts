import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './message.service';
import { MessagesRepository } from './message.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessageService],
})
export class MessagesModule {}
