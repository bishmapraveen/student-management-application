import { create } from 'zustand';

type Role = 'student' | 'faculty' | 'admin';

type User = {
  id: string;
  email: string;
  name: string;
  role: Role;
  connections?: string[];
};

type AuthState = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
