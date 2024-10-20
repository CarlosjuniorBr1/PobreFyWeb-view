import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private audioUrl = 'http://localhost:8080/api/musica';

  constructor(private http: HttpClient) { }

  getAudio() {
    return this.http.get(this.audioUrl, { responseType: 'blob' });
  }
}
