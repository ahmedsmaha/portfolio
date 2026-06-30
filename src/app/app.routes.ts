import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'work', loadComponent: () => import('./work/work').then(m => m.Work) },
    { path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.Blog) },
    { path: 'work/:id', loadComponent: () => import('./project/project').then(m => m.Project) },
    { path: 'blog/:id', loadComponent: () => import('./post/post').then(m => m.Post) },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
