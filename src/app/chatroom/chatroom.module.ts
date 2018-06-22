import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatroomRoutingModule } from './chatroom-routing.module';
import { ChatroomComponent } from './chatroom.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { SharedModule } from '../shared/shared.module';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [CommonModule, ChatroomRoutingModule, SharedModule],
  declarations: [
    ChatroomComponent,
    UserListComponent,
    ChatFormComponent,
    FeedComponent,
    MessageComponent
  ]
})
export class ChatroomModule {}
