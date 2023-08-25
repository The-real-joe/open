import type { NextPageWithLayout } from "../_app";
import RootLayout from "../layout";

const Search: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Search</h1>
      <p className="mt-4 text-gray-600">
        This page is currently under construction
      </p>
    </div>
  );
};

Search.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Search;
