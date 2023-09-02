// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 bg-gray-800 text-white">
      <p className="text-center">© {year} OpenRegen. All rights reserved.</p>
    </footer>
  );
}
