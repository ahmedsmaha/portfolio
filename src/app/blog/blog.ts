import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from '../types/ipost';

@Component({
  selector: 'app-blog',
  imports: [NgClass, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit, AfterViewInit {
  active: 'All' | 'Frontend Dev & UI' | 'Backend & API Dev' | 'DevOps & Cloud Dev' = 'All';
  posts: IPost[] = [];
  currentPage = 1;
  totalPages = 1;
  limit = 3;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private postService: PostService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  setFilter(filter: 'All' | 'Frontend Dev & UI' | 'Backend & API Dev' | 'DevOps & Cloud Dev') {
    this.active = filter;
    this.currentPage = 1;
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts(this.currentPage, this.limit, this.active).subscribe(res => {
      this.posts = res.posts;
      this.totalPages = res.totalPages;
      this.cdr.detectChanges(); // Force view update after async load

      // Re-initialize observer for new elements
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.initRevealObserver(), 100);
      }
    });
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number, event: Event) {
    event.preventDefault();
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadPosts();

      // Scroll to top of posts gently
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initRevealObserver();
      }, 100);
    }
  }

  private initRevealObserver() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    const reveals = this.el.nativeElement.querySelectorAll('.reveal:not(.in)');
    reveals.forEach((el: Element) => io.observe(el));
  }
}
