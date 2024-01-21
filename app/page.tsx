import { cookies } from "next/headers";

import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  if (!isSupabaseConnected) <div> no connect</div>;

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <h1>holi</h1>
    </div>
  );
}
