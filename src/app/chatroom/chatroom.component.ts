import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import { ChatService } from './services/chat.service';
import { ChatMessage } from './models/chat-message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {
  feed: Observable<ChatMessage[]>;
  isListOpen = false;
  @ViewChild('scroller') private feedContainer: ElementRef;
  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.feed = this.chatService.getMessages().valueChanges();
  }

  sendMessage(mes: string) {
    this.chatService.sendMessage(mes);
  }
  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}
