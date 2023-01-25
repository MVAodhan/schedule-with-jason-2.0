import { createClient } from '@supabase/supabase-js'

export const useSupabase() =>{
    
const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

return supabase
} 