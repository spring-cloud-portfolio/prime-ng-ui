import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie';

@Injectable({providedIn: 'root'})
export class AuthService {

  public clientId = 'user-service-client';
  public redirectUri = 'http://127.0.0.1:4200';
  private clientSecret = 'user-service-client-secret';
  public tokenUrl = 'http://127.0.0.1:9000/oauth2/token';
  public loginUrl = 'http://127.0.0.1:9000/oauth2/authorize';

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  login(): void {
    const params = new URLSearchParams();
    params.append('scope', 'all');
    params.append('client_id', this.clientId);
    params.append('response_type', 'code');
    params.append('redirect_uri', this.redirectUri);
    console.log('Login params: ' + params.toString());
    window.location.href = this.loginUrl + '?' + params.toString();
  }

  retrieveToken(authCode: string): void {
    console.log('Retrieve token code: ' + authCode);
    const params = new URLSearchParams();
    params.append('code', authCode);
    params.append('client_id', this.clientId);
    params.append('redirect_uri', this.redirectUri);
    // params.append('client_secret', this.clientSecret);
    params.append('grant_type', 'authorization_code');
    console.log('Retrieve token params: ' + params);

    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    });

    this.http.post(this.tokenUrl, params.toString(), {headers: httpHeaders}).subscribe(
      data => this.saveToken(data),
      error => alert('Invalid Credentials. Error: ' + error)
    );
  }

  saveToken(token: any): void {
    console.log('Obtained Access token: ' + token);
    const expireDate = new Date(1000 * token.expires_in);
    this.cookieService.put('access_token', token.access_token, {expires: expireDate});
    window.location.href = 'http://localhost:4200';
  }

  checkCredentials(): boolean {
    return this.cookieService.hasKey('access_token');
  }

  logout(): void {
    this.cookieService.remove('access_token');
    window.location.reload();
  }

}
