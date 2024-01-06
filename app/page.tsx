"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  function lightThemeEnabler() {
    setTheme("light");
  }

  function darkThemeEnabler() {
    setTheme("dark");
  }

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
      <button
        onClick={lightThemeEnabler}
        type="button"
        className="bg-purple-600 border-4 text-white font-[600] border-purple-800 px-4 py-4 rounded-full"
      >
        Light Theme
      </button>

      <button
        onClick={darkThemeEnabler}
        type="button"
        className="bg-black border-4 text-white font-[600] border-purple-800 px-4 py-4 rounded-full"
      >
        Light Theme
      </button>
    </main>
  );
}
