export const GET_POSTS_LIST = 'GET_POSTS_LIST';
export const GET_POST = 'GET_POST';
export const POST_CREATE_POST = 'POST_CREATE_POST';
export const PUT_UPDATE_POST = 'PUT_UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const POST_CREATE_POST_COMMENTS = 'POST_CREATE_POST_COMMENTS';

export interface LayoutProps {
  title?: string;
}

export interface Comments {
  id: number;
  postId: number;
  body: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  comments: Array<Comments>;
}

export interface State {
  posts: Post[];
  post: Post | {};
}

export interface PostsList {
  type: typeof GET_POSTS_LIST;
  payload: Post[];
}

export interface PostInfo {
  type: typeof GET_POST;
  payload: Post;
}

export interface CreatePost {
  type: typeof POST_CREATE_POST;
}

export interface UpdatePost {
  type: typeof PUT_UPDATE_POST;
}

export interface DeletePost {
  type: typeof DELETE_POST;
}

export interface CreatePostComments {
  type: typeof POST_CREATE_POST_COMMENTS;
}

export interface IndexPageProps {
  posts: Post[];
  getResource: () => void;
	deleteResourceItem: (id: number) => void;
}

export interface PostsListProps {
  data: Post[];
	deletePost: (id: number) => void;
}

export interface PostItemProps {
  post: Post;
	deletePost: (id: number) => void;
}

export interface PostInfoProps {
  post: any;
  createComments: (postId: number, content: string) => void;
  updatePost: (id: number, title: string, content: string) => void;
}

export interface PostPageProps {
  post: Post | {};
  getResourceItem: (id: number) => void;
  createResourceItemComments: (postId: number, content: string) => void;
  updateResourceItem: (id: number, title: string, content: string) => void;
}

export interface CreatePostPageProps {
  createResourceItem: (title: string, body: string) => void;
}

export interface PostCreatorProps {
  createPost: (title: string, body: string) => void;
}
