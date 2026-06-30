export interface IProject {
  id: number;
  title: string;
  desc: string;
  category: string;
  tags: string[];
  img: string;
  featured?: boolean;
  content?: string;
  repoUrl?: string;
  demoUrl?: string;
}
