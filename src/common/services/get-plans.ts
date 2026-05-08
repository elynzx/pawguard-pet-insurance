import { supabase } from "../../common/utils/supabase"

export const getPlans = async () => {
  const response = await supabase
    .from("plans")
    .select("*")
    .order("price")

  if (response.error) throw response.error
  return (response.data)
}