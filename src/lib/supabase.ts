import { createClient } from '@supabase/supabase-js';

// Hardcoded credentials to ensure the app works in the preview environment
const supabaseUrl = 'https://zvzetpudyaaafinqimka.supabase.co'.trim();
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2emV0cHVkeWFhYWZpbnFpbWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxODAwODAsImV4cCI6MjA4Nzc1NjA4MH0.znjlf7X2gMSesfTa5Z_ZXq4fKZeY4VGJ79SHVZa0UlM'.trim();

if (!supabaseUrl) {
  throw new Error('Supabase URL is missing');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
