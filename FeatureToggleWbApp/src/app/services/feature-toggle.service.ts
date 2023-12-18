import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  private apiUrl = 'https://localhost:7031/api/FeatureToggle';

  constructor(private http: HttpClient) {}

  getFeatureToggles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getFeatureToggle(id: number): Observable<any> {
    const url = this.apiUrl + '/' + id;
    return this.http.get<any>(url);
  }

  addFeatureToggle(newToggle: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newToggle);
  }

  updateFeatureToggle(updatedToggle: any): Observable<any> {
    const url = this.apiUrl + '/' + updatedToggle.id;
    return this.http.put<any>(url, updatedToggle);
  }

  archiveFeatureToggle(id: number): Observable<any> {
    const url = this.apiUrl + '/' + id;
    return this.http.delete<any>(url);
  }
}