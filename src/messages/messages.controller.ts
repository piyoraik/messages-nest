import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  listMessages() {}

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
