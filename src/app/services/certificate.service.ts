import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICertificate } from '../types/icertificate';

const CERTIFICATE_DATA: ICertificate[] = [
  { id: 1, title: 'AWS re/Start Graduate', issuer: 'Amazon Web Services (Credly)', date: 'May 2025', url: "https://www.credly.com/badges/416e8fed-fea6-4b96-a457-0ca22ce40cd9/public_url" }
];

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  getCertificates(): Observable<ICertificate[]> {
    return of(CERTIFICATE_DATA);
  }
}
