import type { NextPageWithLayout } from "../_app";
import RootLayout from "../layout";

const ExpertNetwork: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Expert Network</h1>
      <p className="mt-3 text-2xl">Coming soon...</p>
    </div>
  );
};

ExpertNetwork.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default ExpertNetwork;
