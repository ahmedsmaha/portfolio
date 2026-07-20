import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { IProject } from '../types/iproject';
import { RevealService } from '../services/reveal.service';

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
    private el: ElementRef,
    private revealService: RevealService
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
          this.revealService.observe(this.el, { activeClass: ['visible', 'in'], threshold: .08, rootMargin: '0px 0px -30px 0px' });
        });

        this.projectService.getProjects().subscribe(all => {
          const projectId = parseInt(id, 10);
          this.moreProjects = all.filter(p => p.id !== projectId).slice(0, 3);
          this.cdr.detectChanges();
          this.revealService.observe(this.el, { activeClass: ['visible', 'in'], threshold: .08, rootMargin: '0px 0px -30px 0px' });
        });
      }
    });
  }

  ngAfterViewInit() {
    this.revealService.observe(this.el, { activeClass: ['visible', 'in'], threshold: .08, rootMargin: '0px 0px -30px 0px' });
  }
}
