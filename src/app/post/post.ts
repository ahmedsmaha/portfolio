import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from '../types/ipost';

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
    private cdr: ChangeDetectorRef
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
          this.cdr.detectChanges(); // Force view update

          if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => this.initRevealObserver(), 100);
          }
        });
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initRevealObserver();
        this.updateYear();
      }, 100);
    }
  }

  private initRevealObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    const reveals = this.el.nativeElement.querySelectorAll('.reveal');
    reveals.forEach((el: Element) => observer.observe(el));
  }

  private updateYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }
  }
}
