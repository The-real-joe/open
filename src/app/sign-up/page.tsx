import { ReactElement } from "react";

// Next
import type { NextPageWithLayout } from "../_app";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/../types/supabase";
import { ThemeSupa } from "@supabase/auth-ui-shared";

// Components
import AuthForm from "@/auth-form";
import RootLayout from "@/app/layout";

const SignUp: NextPageWithLayout = () => {
  const supabase = createClientComponentClient<Database>();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
      </div>
      <br />
      <AuthForm view="sign_up" />
    </main>
  );
};

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default SignUp;
