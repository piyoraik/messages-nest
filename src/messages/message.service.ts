import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './message.repository';

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
