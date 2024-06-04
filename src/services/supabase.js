import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dxlfctyclvqpieyfznrj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4bGZjdHljbHZxcGlleWZ6bnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMTMyODcsImV4cCI6MjAzMTU4OTI4N30.LnCWxJZLzEkw_GdEZ9VEQizF3neCSVaGZbH9a1ojMIM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
