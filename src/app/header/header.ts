import { Component, HostListener, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, AfterViewInit {
  dark = false;
  mm = false;
  sc = false;
  s = 'hero';
  currentUrl = '/';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.urlAfterRedirects || event.url;
    });
  }
  ngAfterViewInit(): void {
    this.updateSection();
  }

  isBlogActive(): boolean {
    return this.currentUrl.startsWith('/blog') || this.currentUrl.startsWith('/post');
  }

  isWorkActive(): boolean {
    return this.currentUrl.startsWith('/work') || this.currentUrl.startsWith('/project');
  }

  isHome(): boolean {
    return this.currentUrl === '/' || this.currentUrl.startsWith('/#');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.dark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.applyTheme();
      this.updateSection();
    }
  }

  toggleTheme() {
    this.dark = !this.dark;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.dark ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.sc = window.scrollY > 20;
    this.updateSection();
  }

  updateSection() {
    if (!isPlatformBrowser(this.platformId)) return;

    const ids = ['contact', 'blog', 'reviews', 'about', 'work', 'services', 'hero'];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 130) {
        this.s = id;
        return;
      }
    }
  }
}
