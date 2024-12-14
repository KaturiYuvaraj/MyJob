import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and public API key
const supabaseUrl = 'https://cpknyigymjpepojgsegp.supabase.co';  // Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa255aWd5bWpwZXBvamdzZWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMjg5MTAsImV4cCI6MjA0OTcwNDkxMH0.wwUS7IoQWp7eAkLazSSuBE7vXy9VBHohILVjFTEldMg';  // Supabase public key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
