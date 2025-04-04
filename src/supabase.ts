import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co'; // replace with your Supabase URL
const supabaseAnonKey = 'your-anon-key'; // replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
