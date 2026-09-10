import { createClient } from "@supabase/supabase-js";

// Safe environment variable retrieval compatible with Vite browser and SSR/Node.js
const supabaseUrl =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_URL) ||
  (typeof process !== "undefined" && process.env?.VITE_SUPABASE_URL) ||
  "https://icnaufhmralkaukefpop.supabase.co";

const supabaseAnonKey =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY) ||
  (typeof process !== "undefined" && process.env?.VITE_SUPABASE_PUBLISHABLE_KEY) ||
  "sb_publishable_n7glU5wNpTfkqBLCTuapNQ_9yzi0Vn4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export interface Novedad {
  id: string;
  category: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  active: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}
