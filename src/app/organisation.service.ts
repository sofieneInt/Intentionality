import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organisation } from './organisation';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
})
};
@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private organisationsUrl = 'http://localhost:8080/api/organisation';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }


  getorganisations (): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.organisationsUrl);
  }

  getorganisation(id: number): Observable<Organisation> {
    const url = `${this.organisationsUrl}/${id}`;
    return this.http.get<Organisation>(url);
  }

  addorganisation (organisation: Organisation): Observable<Organisation> {
    return this.http.post<Organisation>(this.organisationsUrl, organisation, httpOptions);
  }

  deleteorganisation (organisation: Organisation | number): Observable<Organisation> {
    const id = typeof organisation === 'number' ? organisation : organisation.id;
    const url = `${this.organisationsUrl}/${id}`;

    return this.http.delete<Organisation>(url, httpOptions);
  }

  updateorganisation (organisation: Organisation): Observable<any> {
    return this.http.put(this.organisationsUrl, organisation, httpOptions);
  }

}
