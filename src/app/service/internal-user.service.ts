import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {InternalUserRegistration} from '../model/security/internal-user-registration';
import {Observable} from 'rxjs';
import {InternalUser} from '../model/security/internal-user';

@Injectable({providedIn: 'root'})
export class InternalUserService {

  private baseUrl = environment.personServiceUrl;

  constructor(private http: HttpClient) {
  }

  register(userRegistration: InternalUserRegistration): Observable<InternalUser> {
    return this.http.post(this.baseUrl + '/registration/sign-up.json', userRegistration);
  }

}
