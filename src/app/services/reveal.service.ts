import { Injectable, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface RevealOptions {
  activeClass?: string | string[];
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class RevealService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  observe(el: ElementRef, options?: RevealOptions) {
    if (!isPlatformBrowser(this.platformId)) return;

    const delay = options?.delay ?? 100;
    
    setTimeout(() => {
      const activeClass = options?.activeClass || 'in';
      const threshold = options?.threshold ?? 0.1;
      const rootMargin = options?.rootMargin || '0px 0px -40px 0px';

      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            if (Array.isArray(activeClass)) {
              e.target.classList.add(...activeClass);
            } else {
              e.target.classList.add(activeClass);
            }
            io.unobserve(e.target);
          }
        });
      }, { threshold, rootMargin });

      const queryClass = Array.isArray(activeClass) ? activeClass[0] : activeClass;
      const reveals = el.nativeElement.querySelectorAll(`.reveal:not(.${queryClass})`);
      reveals.forEach((element: Element) => io.observe(element));
    }, delay);
  }
}
