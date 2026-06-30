import { IPost } from './ipost';

export interface IPaginatedPosts {
  posts: IPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
