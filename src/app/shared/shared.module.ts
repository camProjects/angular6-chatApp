import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthService } from '../auth/services/auth.service';

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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    };
  }
}
