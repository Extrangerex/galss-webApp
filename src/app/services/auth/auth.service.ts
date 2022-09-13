import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../utils/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static KEY_AUTH_DATA: string = 'AUTH_DATA';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/login`, {
      email,
      password,
    });
  }

  get isLoggedIn() {
    return (
      this.storageService.get(AuthService.KEY_AUTH_DATA, { decrypt: false }) !==
      null
    );
  }
}
