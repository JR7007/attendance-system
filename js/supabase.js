// supabase.js
// This file connects our website to our Supabase database
// Every other JS file will import from this file

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Your Supabase project credentials
// These tell our website WHICH Supabase project to connect to
const SUPABASE_URL = "https://cceryuyjvkzeeuojlugu.supabase.co";
const SUPABASE_KEY = "sb_publishable_9KtV9aaRaQDdd95a3cbxbA_mmWa_xyl";

// Create the Supabase client
// Think of this like opening a connection to your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
