"use client";
import type { NextPageWithLayout } from "../_app";
// pull in search icon from heroicons
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Search(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert(`Submitting search for: ${searchTerm}`);
    // Add logic to handle search submission here
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
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
      </form>
    </div>
  );
}
