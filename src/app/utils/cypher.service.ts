import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class CypherService {
  constructor() {}

  encrypt(payload: string) {
    return Buffer.from(payload).toString('hex');
  }

  decrpt(hash: string) {
    return Buffer.from(hash).toString('ascii');
  }
}
