import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {HeaderComponent} from './ui/core/header/header.component';
import {FooterComponent} from './ui/core/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieModule} from 'ngx-cookie';
import {HomeComponent} from './ui/page/home/home.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {SignInComponent} from './ui/page/security/sign-in/sign-in.component';
import {environment} from '../environments/environment';
import { SignUpComponent } from './ui/page/security/sign-up/sign-up.component';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CardModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    BrowserModule,
    InputTextModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
        allowedUrls: [
          environment.personServiceUrl
        ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
