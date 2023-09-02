import { ReactElement } from "react";

// Next
import type { NextPageWithLayout } from "../_app";

// Components
import AuthForm from "@/auth-form";
import RootLayout from "@/app/layout";

const Login: NextPageWithLayout = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 to-shamrock-900 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-black-800 lg:text-white lg:p-4 lg:dark:bg-zinc-800/30"
          style={{ color: "white", textShadow: "1px 1px black" }}
        >
          &quot; Empower your farm with AI. Grow with OpenRegen, cultivating the
          future.&quot;
        </p>
      </div>
      <br />
      <AuthForm view="magic_link" />
    </main>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Login;
