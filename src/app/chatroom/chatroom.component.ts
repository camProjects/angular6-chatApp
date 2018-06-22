import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { ChatMessage } from './models/chat-message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  feed: Observable<ChatMessage[]>;
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.feed = this.chatService.getMessages().valueChanges();
  }

  sendMessage(mes: string) {
    this.chatService.sendMessage(mes);
  }
}
