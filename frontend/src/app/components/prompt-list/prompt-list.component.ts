import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './prompt-list.html'
})
export class PromptListComponent implements OnInit {

  prompts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://ai-prompt-library-dutr.onrender.com/api/prompts/')
      .subscribe(data => {
        this.prompts = data;
      });
  }
}