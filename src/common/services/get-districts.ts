import { supabase } from "../utils/supabase";

export const getDistricts = async () => {
  const response = await supabase
    .from("districts")
    .select("*")
    .order("name")

  if (response.error) throw response.error
  return (response.data)
}