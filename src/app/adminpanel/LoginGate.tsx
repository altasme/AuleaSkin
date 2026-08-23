"use client";

import { useState } from "react";
import { ADMIN_PASSWORD, ADMIN_SESSION_KEY, ADMIN_USERNAME } from "./auth";

export function LoginGate({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      try {
        window.sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      } catch {
        // Session storage unavailable, admin stays logged in for this
        // render only, that's fine for a client-only gate.
      }
      setError(null);
      onSuccess();
    } else {
      setError("Incorrect username or password.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <p className="font-label text-xs tracking-[0.15em] text-navy/70">AULÉA SKIN</p>
        <h1 className="mt-1 font-display text-2xl text-ink">Admin Panel</h1>
        <p className="mt-2 text-sm text-ink/60">Sign in to manage products and site content.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-gray-600" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-navy px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-navy-deep"
          >
            Sign in
          </button>
        </form>
        <p className="mt-6 text-xs leading-relaxed text-gray-400">
          This is a client-side login only, there is no server on this site yet to check it
          properly. Don&apos;t treat this as real security, see docs/admin-panel.md.
        </p>
      </div>
    </div>
  );
}
