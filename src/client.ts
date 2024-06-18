import { createClient } from '@supabase/supabase-js';

const URL = 'https://yaqafcsgyglcvmlkggnu.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhcWFmY3NneWdsY3ZtbGtnZ251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3Mjc3MzEsImV4cCI6MjAzNDMwMzczMX0.l01LbH-yi2FRCHqqU05A5uUByt0aekfCCT0uyE1Hijk';

export const supabase = createClient(URL, API_KEY);

