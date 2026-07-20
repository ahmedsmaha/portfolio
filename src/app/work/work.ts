import { Component, AfterViewInit, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { IProject } from '../types/iproject';
import { RevealService } from '../services/reveal.service';

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
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private projectService: ProjectService,
    private revealService: RevealService
  ) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.allProjects = projects;
      this.cdr.detectChanges();
      this.revealService.observe(this.el, { activeClass: 'visible', threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    });
  }

  get visibleCount() {
    if (this.filter === 'All') return this.allProjects.length;
    return this.allProjects.filter(p => p.category === this.filter).length;
  }

  setFilter(val: string) {
    this.filter = val;
    this.cdr.detectChanges();
    this.revealService.observe(this.el, { activeClass: 'visible', threshold: 0.08, rootMargin: '0px 0px -30px 0px', delay: 50 });
  }

  ngAfterViewInit() {
    this.revealService.observe(this.el, { activeClass: 'visible', threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  }
}
