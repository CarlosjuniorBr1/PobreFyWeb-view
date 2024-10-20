import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  audioUrl = 'http://localhost:8080/api/musica'; // Certifique-se de que esta URL está correta

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.audioUrl, { responseType: 'text' }).subscribe(
      data => {
        console.log('Dados recebidos:', data);
      },
      error => {
        console.error('Erro ao buscar a música:', error);
      }
    );
  }
}
