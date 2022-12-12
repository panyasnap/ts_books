import {MessageBody, SubscribeMessage, WebSocketGateway, WsException, WsResponse} from '@nestjs/websockets';


@WebSocketGateway({ cors: true })
export class AppGateway {


  @SubscribeMessage('produce-error')
  handleMessage(client: any, payload: any): string {
    throw new WsException('Ooops!');

    return 'Hello world!';
  }


  @SubscribeMessage('get-comm')
  handleAge(
      @MessageBody('comm') comm: string,
      client: any,
      payload: any
  ): WsResponse<string> {
    return { event: 'comm', data: comm };
  }

}