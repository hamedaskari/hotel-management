import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://usxcfrcrbbtvbfmsaevq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzeGNmcmNyYmJ0dmJmbXNhZXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NzE1ODUsImV4cCI6MjAzMTM0NzU4NX0.SVQw5muFN5A9bEHdfSATJmtmSJZLaUUIHsDMsOp0dxM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
