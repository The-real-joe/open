export const dynamic = "force-dynamic";
import { ReactElement } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/../types/supabase";
import AccountForm from "./account-form";
import type { NextPageWithLayout } from "@/app/_app";
import RootLayout from "@/app/layout";

const Account: NextPageWithLayout = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm m-auto">
        <h1 className="text-6xl font-bold text-center mb-6">Account</h1>
        <div className="flex items-center justify-center">
          <AccountForm session={session} />
        </div>
      </div>
    </main>
  );
};
Account.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Account;
