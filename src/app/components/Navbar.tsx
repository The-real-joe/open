"use client";
// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const colorScheme = {
  primary: "#79735C",
  secondary: "#F5F5F5",
  highlight: "#F2C94C",
  text: "#333333",
};

export default function Navbar(props: { session: any }) {
  const curPath = usePathname();
  return (
    <nav
      className="flex justify-between items-center p-5 shadow-md"
      style={{ backgroundColor: colorScheme.primary }}
    >
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="relative">
            <h1
              className="text-2xl font-bold transition-colors duration-300 ease-in-out"
              style={{ color: colorScheme.secondary }}
            >
              OpenRegen
            </h1>
          </div>
        </Link>
        <Link
          href="/search"
          className={
            curPath === "/search"
              ? "text-gray-800 font-bold"
              : "text-white" + " hover:text-white-800"
          }
        >
          Search
        </Link>
        {/* <Link
          href="/discuss"
          className={useIsActive("/discuss") + " hover:text-white-800"}
        >
          Discuss
        </Link>
        <Link href="/plans" className="text-lightWhite hover:text-white-800">
          My Plans
        </Link>
        <Link href="/budget" className="text-lightWhite hover:text-white-800">
          My Budget & Forecast
        </Link> */}
        <Link
          href="/network"
          className={curPath === "/network" ? "text-gray-800 font-bold" : ""}
        >
          Experts
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {props.session ? (
          <>
            <Link
              href="/account"
              className={
                curPath === "/account" ? "text-gray-800 font-bold" : ""
              }
            >
              {props.session.user.email}
            </Link>
            <button
              className="text-lightWhite hover:text-white-800"
              onClick={() => console.log("logout")}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className={curPath === "/login" ? "text-gray-800 font-bold" : ""}
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className={
                curPath === "/sign-up" ? "text-gray-800 font-bold" : ""
              }
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
