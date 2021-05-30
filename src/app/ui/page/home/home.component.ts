import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {BehaviorSubject} from 'rxjs';
import {JwksValidationHandler} from 'angular-oauth2-oidc-jwks';
import {authCodeFlowConfig} from '../../../core/config/auth-code-flow.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoggedIn = false;
  public token$ = new BehaviorSubject<string>('');

  constructor(private authService: AuthService,
              private oAuthService: OAuthService) {
  }

  ngOnInit(): void {
    // Token
    // const i = window.location.href.indexOf('code');
    // console.log('Index of code: ' + i);
    // if (!this.isLoggedIn && i !== -1) {
    //   const code = window.location.href.substring(i + 5);
    //   console.log('Auth code: ' + code);
    //   this.authService.retrieveToken(code);
    // }
  }

  logIn(): void {
    this.oAuthService.configure(authCodeFlowConfig);
    // this.oAuthService.loadDiscoveryDocument().then();
    // this.oAuthService.initLoginFlow();
    // this.oAuthService.initCodeFlow();
    // this.oAuthService.loadDiscoveryDocumentAndTryLogin().then();
    this.oAuthService.loadDiscoveryDocumentAndLogin().then();
  }

  logOut(): void {
    this.oAuthService.logOut();
    // this.oAuthService.revokeTokenAndLogout().then();
  }

  refresh(): void {
    this.oAuthService.refreshToken().then();
  }

  showToken(): void {
    const accessToken = this.oAuthService.getAccessToken();
    console.log('Access token: ' + accessToken);
    const refreshToken = this.oAuthService.getRefreshToken();
    console.log('Refresh token: ' + refreshToken);
    console.log('Has valid id token: ' + this.oAuthService.hasValidIdToken());
    console.log('Has valid access token: ' + this.oAuthService.hasValidAccessToken());
    console.log('Identity climes: ' + JSON.stringify(this.oAuthService.getIdentityClaims()));
    this.token$.next(accessToken);
  }

}
