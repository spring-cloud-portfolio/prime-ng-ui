import {Component, OnDestroy, OnInit} from '@angular/core';
import {authCodeFlowConfig} from '../../../../core/config/auth-code-flow.config';
import {OAuthService} from 'angular-oauth2-oidc';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();

  constructor(private router: Router,
              private oAuthService: OAuthService) {
  }

  ngOnInit(): void {
    this.subscription.add(this.oAuthService.events.pipe(filter(e => e.type === 'token_received')).subscribe(_ => {
      this.router.navigateByUrl('/home').then();
    }));
  }

  signIn(): void {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocumentAndLogin().then();
  }

  signOut(): void {
    this.oAuthService.logOut();
    // this.oAuthService.revokeTokenAndLogout().then();
  }

  signUp(): void {
    this.router.navigateByUrl('/sign-up').then();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
