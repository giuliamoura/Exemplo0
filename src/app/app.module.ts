import { BitcoinsModule } from './bitcoins/bitcoins.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FaltasModule } from './faltas/faltas.module';
import { NotasModule } from './notas/notas.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    AuthService, 
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
