import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ProfileDisplayComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
