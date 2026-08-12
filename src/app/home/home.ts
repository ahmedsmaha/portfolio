import { Component, AfterViewInit, OnInit, Inject, PLATFORM_ID, ElementRef, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { IProject } from '../types/iproject';
import { PostService } from '../services/post.service';
import { IPost } from '../types/ipost';
import { NgClass } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService, ContactData } from '../services/contact.service';
import { RevealService } from '../services/reveal.service';
import { ExperienceService } from '../services/experience.service';
import { IExperience } from '../types/iexperience';
import { EducationService } from '../services/education.service';
import { IEducation } from '../types/ieducation';
import { CertificateService } from '../services/certificate.service';
import { ICertificate } from '../types/icertificate';
import { SkillService } from '../services/skill.service';
import { ISkill } from '../types/iskill';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgClass, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, AfterViewInit {
  featuredProjects: IProject[] = [];
  featuredPosts: IPost[] = [];

  contactData: ContactData = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  skills_about_me = [
    'Angular', 'TypeScript', 'JavaScript', 'RxJS', 'HTML / CSS', 'Kendo UI', 'Tailwind CSS',
    'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'JWT Auth',
    'MongoDB', 'Mongoose', 'Redis', 'Elasticsearch', 'NoSQL', 'Aggregation Pipelines',
    'Git / GitHub', 'Docker', 'CI/CD', 'Jira', 'Postman', 'Unit Testing'
  ];
  experiences: IExperience[] = [];
  educations: IEducation[] = [];
  certificates: ICertificate[] = [];
  skills: ISkill[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private projectService: ProjectService,
    private postService: PostService,
    private contactService: ContactService,
    private revealService: RevealService,
    private experienceService: ExperienceService,
    private educationService: EducationService,
    private certificateService: CertificateService,
    private skillService: SkillService
  ) { }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.cdr.detectChanges();

    this.contactService.sendMessage(this.contactData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactData = { name: '', email: '', subject: '', message: '' };
        form.resetForm();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error sending message:', err);
        this.isSubmitting = false;
        this.submitError = true;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnInit() {
    this.projectService.getFeaturedProjects().subscribe(projects => {
      this.featuredProjects = projects;
      this.cdr.detectChanges();
      this.revealService.observe(this.el);
    });

    this.postService.getFeaturedPosts().subscribe(posts => {
      this.featuredPosts = posts;
      this.cdr.detectChanges();
      this.revealService.observe(this.el);
    });

    this.experienceService.getExperience().subscribe(data => {
      this.experiences = data;
      this.cdr.detectChanges();
      this.revealService.observe(this.el);
    });

    this.educationService.getEducation().subscribe(data => {
      this.educations = data;
      this.cdr.detectChanges();
      this.revealService.observe(this.el);
    });

    this.certificateService.getCertificates().subscribe(data => {
      this.certificates = data;
      this.cdr.detectChanges();
      this.revealService.observe(this.el);
    });

    this.skillService.getSkills().subscribe(data => {
      this.skills = data;
      this.cdr.detectChanges();
      this.revealService.observe(this.el);
    });
  }

  ngAfterViewInit() {
    this.revealService.observe(this.el);
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.updateYear();
      }, 100);
    }
  }

  private updateYear() {
    const yrEl = document.getElementById('yr');
    if (yrEl) {
      yrEl.textContent = new Date().getFullYear().toString();
    }
  }
}
