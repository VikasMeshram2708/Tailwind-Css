"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [toggleTheme, setToggleTheme] = useState("light");

  const handleThemeToggler = () => {
    setToggleTheme(toggleTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (toggleTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [toggleTheme]);
  return (
    <main className="flex min-h-screen dark:bg-black dark:text-white flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <p>
        <Link href="/users">
          Users
        </Link>
      </p>
      <button
        onClick={handleThemeToggler}
        type="button"
        className="bg-purple-600 border-4 text-white font-[600] border-purple-800 px-4 py-4 rounded-full"
      >
        {toggleTheme === "light" ? "Light Mode Enabled" : "Dark Mode Enabled"}
      </button>
    </main>
  );
}
