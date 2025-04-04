import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uohumfmioepjfzesyzhg.supabase.co'; // replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvaHVtZm1pb2VwamZ6ZXN5emhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NDYwNzQsImV4cCI6MjA1OTMyMjA3NH0.COUj1OCICOtYQ8BJpFgl25IZDBQsyVScOam9VHKrmDQ'; // replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
