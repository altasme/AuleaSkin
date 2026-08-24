"use client";

import { useState } from "react";
import { ADMIN_SESSION_KEY } from "./auth";
import { buttonPrimary, inputClass, labelClass } from "./ui";

export function LoginGate({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setChecking(true);

    const encoded = btoa(`${username}:${password}`);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { Authorization: `Basic ${encoded}` },
      });
      if (!res.ok) {
        setError("Incorrect username or password.");
        return;
      }
      try {
        window.sessionStorage.setItem(ADMIN_SESSION_KEY, encoded);
      } catch {
        // Session storage unavailable, admin stays logged in for this
        // render only, that's fine, it just won't survive a reload.
      }
      onSuccess();
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setChecking(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold tracking-[0.15em] text-navy/70">AULÉA SKIN</p>
        <h1 className="mt-1 text-2xl font-semibold text-ink">Admin Panel</h1>
        <p className="mt-2 text-sm text-ink/60">Sign in to manage products and site content.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className={labelClass} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={checking} className={`${buttonPrimary} w-full`}>
            {checking ? "Checking…" : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-xs leading-relaxed text-gray-400">
          Checked against the real admin credentials on the server (functions/api/login.ts), not
          just in this page&apos;s JavaScript. See docs/admin-panel.md.
        </p>
      </div>
    </div>
  );
}
