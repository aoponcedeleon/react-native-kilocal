// import {AsyncStorageStatic} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createClient} from "@supabase/supabase-js";
import {SUPABASE_URL, SUPABASE_ANON_KEY} from "./constants";

// temp
const supabaseURL = "https://baxmfdyvshqdzgoanutt.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJheG1mZHl2c2hxZHpnb2FudXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwMzYxNzMsImV4cCI6MTk4MDYxMjE3M30.NZ6mpgikS6IM0ezuQpowEY9ZoJc4Sxx-nBq_SjWirRY";

export const supabase = createClient(supabaseURL, key, {
  localStorage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});
