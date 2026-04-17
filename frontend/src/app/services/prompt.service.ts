import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private apiUrl = 'https://ai-prompt-library-dutr.onrender.com';

  constructor(private http: HttpClient) {}

  getPrompts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPrompt(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/`);
  }

  addPrompt(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}