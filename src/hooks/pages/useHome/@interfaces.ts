export interface IGithubApiUser {
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
  html_url: string;
  login: string;
  name: string;
}

export interface IUser {
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
  profile_url: string;
  username: string;
  name: string;
}

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
