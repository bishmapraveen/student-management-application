import { create } from 'zustand';
import { Post, Comment, User } from '../types';

interface SocialState {
  posts: Post[];
  users: User[];
  addPost: (post: Post) => void;
  addComment: (postId: string, comment: Comment) => void;
  toggleLike: (postId: string, userId: string) => void;
  toggleCommentLike: (postId: string, commentId: string, userId: string) => void;
  addConnection: (userId: string, connectionId: string) => void;
  removeConnection: (userId: string, connectionId: string) => void;
}

export const useSocialStore = create<SocialState>((set) => ({
  posts: [],
  users: [],
  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),
  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      ),
    })),
  toggleLike: (postId, userId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes.includes(userId)
                ? post.likes.filter((id) => id !== userId)
                : [...post.likes, userId],
            }
          : post
      ),
    })),
  toggleCommentLike: (postId, commentId, userId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      likes: comment.likes.includes(userId)
                        ? comment.likes.filter((id) => id !== userId)
                        : [...comment.likes, userId],
                    }
                  : comment
              ),
            }
          : post
      ),
    })),
  addConnection: (userId, connectionId) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? { ...user, connections: [...user.connections, connectionId] }
          : user
      ),
    })),
  removeConnection: (userId, connectionId) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? {
              ...user,
              connections: user.connections.filter((id) => id !== connectionId),
            }
          : user
      ),
    })),
}));