import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './core/config/auth-code-flow.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private oAuthService: OAuthService,
              private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    // Ripple effect
    this.primengConfig.ripple = true;
    // OAuth2 initiation
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then();
  }

}
