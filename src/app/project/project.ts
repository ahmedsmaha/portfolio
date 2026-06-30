import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { IProject } from '../types/iproject';

@Component({
  selector: 'app-project',
  imports: [CommonModule, RouterLink],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project implements OnInit, AfterViewInit {
  project: IProject | undefined;
  safeContent: SafeHtml | null = null;
  moreProjects: IProject[] = [];
  private sanitizer = inject(DomSanitizer);

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.projectService.getProjectById(id).subscribe(data => {
          this.project = data;
          if (data?.content) {
            this.safeContent = this.sanitizer.bypassSecurityTrustHtml(data.content);
          } else {
            this.safeContent = null;
          }
          this.cdr.detectChanges();
          this.initObserver();
        });

        // Fetch a few projects for the "More projects" section
        this.projectService.getProjects().subscribe(all => {
          const projectId = parseInt(id, 10);
          this.moreProjects = all.filter(p => p.id !== projectId).slice(0, 3);
          this.cdr.detectChanges();
          this.initObserver();
        });
      }
    });
  }

  ngAfterViewInit() {
    this.initObserver();
  }

  private initObserver() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              e.target.classList.add('in'); // adding both to be safe depending on css
              obs.unobserve(e.target);
            }
          });
        }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });

        const reveals = this.el.nativeElement.querySelectorAll('.reveal:not(.visible)');
        reveals.forEach((el: Element) => obs.observe(el));
      }, 100);
    }
  }
}
