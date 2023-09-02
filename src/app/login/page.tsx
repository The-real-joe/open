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
        <h1 className="text-4xl font-bold text-center">Login</h1>
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
