import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from '../types/ipost';
import { RevealService } from '../services/reveal.service';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit, AfterViewInit {
  post: IPost | undefined;
  safeContent: SafeHtml | null = null;
  private sanitizer = inject(DomSanitizer);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private route: ActivatedRoute,
    private postService: PostService,
    private cdr: ChangeDetectorRef,
    private revealService: RevealService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.postService.getPostById(id).subscribe(post => {
          this.post = post;
          if (post?.content) {
            this.safeContent = this.sanitizer.bypassSecurityTrustHtml(post.content);
          } else {
            this.safeContent = null;
          }
          this.cdr.detectChanges();

          this.revealService.observe(this.el, { activeClass: 'visible' });
        });
      }
    });
  }

  ngAfterViewInit() {
    this.revealService.observe(this.el, { activeClass: 'visible' });
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.updateYear();
      }, 100);
    }
  }

  private updateYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }
  }
}
