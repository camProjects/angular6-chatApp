import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  exports: [
    FormsModule,
    NavbarComponent,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [NavbarComponent]
})
export class SharedModule {}
