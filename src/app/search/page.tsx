
'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabase"; // Assuming supabase is properly initialized
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface Product {
  id: number;
  name: string;
  // Add other product properties here
}

export default function Search(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchSearchResults = async () => {
    try {
      if (!searchTerm) {
        setSearchResults([]);
        return;
      }

      const { data, error } = await supabase
        .from<Product>('fbn_products')
        .select('*')
        .ilike('product_name', `%${searchTerm}%`);

      if (error) {
        throw error;
      }

      setSearchResults(data || []);
    } catch (error) {
      console.error('Error searching database:', error);
      setSearchResults([]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await fetchSearchResults();
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Search</h1>
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md relative">
        <input
          className="border border-gray-400 p-2 w-full rounded-md pl-10 text-black"
          type="text"
          placeholder="Search for a product or best practice"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <button type="submit" className="absolute inset-y-0 right-0 bg-white border border-black-3000 rounded-r-md px-4 py-2 text-gray-700">
          Search
        </button>
      </form>
      <div className="mt-8">
        {searchResults.length > 0 && <h2 className="text-2xl font-semibold">Search Results:</h2>}
        <ul>
          {searchResults.map((product) => (
            <li key={product.product_name}>
               <a className="text-blue-500" href={ product.product_name}>{product.product_name}</a>
               
               </li>
            // Render other product properties as needed
          ))}
        </ul>
      </div>
    </div>
  );
}