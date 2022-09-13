import { Injectable } from '@angular/core';
import { CypherService } from './cypher.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cypherService: CypherService) {}

  save(key: string, payload: any) {
    localStorage.setItem(key, this.cypherService.encrypt(payload));
    return localStorage.getItem(key) !== null;
  }

  get<T>(key: string, { decrypt } = { decrypt: true }) {
    let data = localStorage.getItem(key);

    if (!decrypt) {
      return data;
    }

    data = data !== null ? this.cypherService.decrpt(data) : '{}';
    return JSON.parse(data) as T;
  }
}
