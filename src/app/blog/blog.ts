import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from '../types/ipost';
import { RevealService } from '../services/reveal.service';

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
    private cdr: ChangeDetectorRef,
    private revealService: RevealService
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
      this.cdr.detectChanges();
      this.revealService.observe(this.el);
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

      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  ngAfterViewInit() {
    this.revealService.observe(this.el);
  }
}
