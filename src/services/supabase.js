import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kgnfbodqclmoxuixgusb.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbmZib2RxY2xtb3h1aXhndXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMzcyMjgsImV4cCI6MjA1OTcxMzIyOH0.XgitV0nCCDT5T39qbl0eA9KF2frutALBsLE1mjDk12A`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
