import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { IProject } from '../types/iproject';

@Component({
  selector: 'app-work',
  imports: [NgClass, RouterLink],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work implements OnInit, AfterViewInit {
  filter: string = 'All';

  filterOptions = ['All', 'Frontend Dev & UI', 'Backend & API Dev', 'DevOps & Cloud Dev'];

  allProjects: IProject[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.allProjects = projects;
      this.cdr.detectChanges(); // Force view update after async load

      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.initRevealObserver(), 100);
      }
    });
  }

  get visibleCount() {
    if (this.filter === 'All') return this.allProjects.length;
    return this.allProjects.filter(p => p.category === this.filter).length;
  }

  setFilter(val: string) {
    this.filter = val;
    this.cdr.detectChanges();
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initRevealObserver(), 50);
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
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    const reveals = this.el.nativeElement.querySelectorAll('.reveal:not(.visible)');
    reveals.forEach((el: Element) => io.observe(el));
  }
}
