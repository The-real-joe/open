import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import RootLayout from "./layout";

const Home: NextPageWithLayout = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm m-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">OpenRegen</h1>
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            Beta
          </span>
        </div>
        <p className="text-white text-center mt-4">
          Grow with OpenRegen, cultivating the future.
        </p>
      </div>
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
