type TUser = {
  login: string;
};

export interface IGithubApiPosts {
  id: number;
  title: string;
  body: string;
  number: number;
  created_at: string;
}

export interface IGithubApiPost {
  title: string;
  created_at: string;
  comments: number;
  body: string;
  user: TUser;
  html_url: string;
}

export interface IPost {
  id: number;
  issue_number: number;
  link: string;
  title: string;
  publishTime: string;
  slug: string;
  body: string;
}

export interface IPostData {
  title: string;
  publishTime: string;
  comments: number;
  body: string;
  username: string;
  link: string;
}
