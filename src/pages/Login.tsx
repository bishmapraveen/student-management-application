// src/pages/Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { useAuthStore } from '../store/authStore';
import { BookOpen } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError(signInError.message);
      return;
    }

    const user = data.user;

    if (!user.email_confirmed_at) {
      setError('Please verify your email before logging in.');
      return;
    }

    let { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();

    if (!profile) {
      const pendingProfile = JSON.parse(localStorage.getItem('pendingProfile') || '{}');
      const { error: insertError } = await supabase.from('profiles').insert([
        {
          id: user.id,
          email: user.email,
          name: pendingProfile.name || user.email,
          role: pendingProfile.role || 'student',
        },
      ]);
      if (insertError) {
        setError('Failed to create user profile.');
        return;
      }
      profile = { ...pendingProfile, id: user.id, email: user.email };
    }

    login({
      id: profile.id,
      name: profile.name,
      email: profile.email,
      role: profile.role,
      connections: [],
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <div className="flex justify-center">
          <BookOpen className="h-10 w-10 text-indigo-600" />
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold">Sign in to EduManager</h2>
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Login</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
