import { ReactElement } from "react";

// Next
import type { NextPageWithLayout } from "../_app";

// Components
import AuthForm from "../../auth-form";
import RootLayout from "../layout";

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
      <AuthForm />

      {/* <div className="flex flex-wrap justify-around w-full max-w-4xl mt-16">
        <a
          href="/auth/login"
          className="group w-72 m-4 rounding-lg shadow-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <div className="p-5">
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-sm mt-2 text-gray-600">
              Login with your account
            </p>
          </div>
        </a>
        <a
          href="/auth/register"
          className="group w-72 m-4 rounding-lg shadow-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <div className="p-5">
            <h2 className="text-2xl font-bold">Register</h2>
            <p className="text-sm mt-2 text-gray-600">
              Register for a new account
            </p>
          </div>
        </a>
      </div> */}
    </main>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Login;
