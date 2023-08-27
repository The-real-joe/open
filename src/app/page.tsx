import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { SunIcon } from "@heroicons/react/24/solid";

import AuthForm from "../auth-form";
import RootLayout from "./layout";

const Home: NextPageWithLayout = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">OpenRegen</h1>
        </div>
        <p className="text-white text-center mt-4">
          Grow with OpenRegen, cultivating the future.
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="bg-green-500 text-white rounded-full px-4 py-2 flex items-center">
            <span className="text-sm font-medium mr-2">BETA</span>
            <SunIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <AuthForm />
          </div>
        </div>
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
