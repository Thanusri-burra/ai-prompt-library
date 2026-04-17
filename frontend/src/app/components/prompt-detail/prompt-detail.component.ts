import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prompt-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompt-detail.html',
  styleUrls: ['./prompt-detail.css']
})
export class PromptDetailComponent implements OnInit {

  prompt: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cd: ChangeDetectorRef   // ✅ important
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.http.get(`https://ai-prompt-library-dutr.onrender.com/api/prompts/${id}/`)
          .subscribe({
            next: (data: any) => {
              console.log("API DATA:", data);

              this.prompt = data;

              this.cd.detectChanges();   // 🔥 force UI update
            },
            error: (err) => {
              console.error(err);
            }
          });
      }
    });
  }
}