import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
// import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  message;
  constructor(
    private authService: AuthService // private msgService: MessagingService
  ) {}
  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {
    // this.msgService.getPermission();
    // this.msgService.receiveMessage();
    // this.message = this.msgService.currentMessage;
  }
}
