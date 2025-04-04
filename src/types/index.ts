export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
  avatar?: string;
  bio?: string;
  department?: string;
  yearOfStudy?: number;
  interests?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  connections: string[];
};

export type Course = {
  id: string;
  name: string;
  code: string;
  description: string;
  instructor: string;
  schedule: string[];
  enrolledStudents: string[];
};

export type Assignment = {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  submissions: Submission[];
};

export type Submission = {
  id: string;
  assignmentId: string;
  studentId: string;
  submissionDate: string;
  content: string;
  grade?: number;
};

export type Attendance = {
  id: string;
  courseId: string;
  date: string;
  presentStudents: string[];
};

export type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
};

export type Chat = {
  id: string;
  participants: string[];
  messages: Message[];
  lastMessage?: Message;
};

export type Post = {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
  likes: string[];
  comments: Comment[];
  attachments?: string[];
};

export type Comment = {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
  likes: string[];
};