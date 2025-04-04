import { create } from 'zustand';
import { Message, Chat, User } from '../types';

interface ChatState {
  chats: Chat[];
  activeChat: Chat | null;
  messages: Message[];
  setActiveChat: (chat: Chat | null) => void;
  addMessage: (message: Message) => void;
  createChat: (participants: string[]) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  activeChat: null,
  messages: [],
  setActiveChat: (chat) => set({ activeChat: chat }),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
      chats: state.chats.map((chat) => {
        if (chat.participants.includes(message.senderId) && chat.participants.includes(message.receiverId)) {
          return {
            ...chat,
            messages: [...chat.messages, message],
            lastMessage: message,
          };
        }
        return chat;
      }),
    })),
  createChat: (participants) =>
    set((state) => ({
      chats: [
        ...state.chats,
        {
          id: Math.random().toString(36).substr(2, 9),
          participants,
          messages: [],
        },
      ],
    })),
}));