export interface IGithubApiPosts {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

export interface IPost {
  id: number;
  link: string;
  title: string;
  publishTime: string;
  body: string;
}
