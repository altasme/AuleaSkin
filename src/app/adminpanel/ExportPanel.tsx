"use client";

import { useState } from "react";
import { useAdminStore } from "@/lib/admin-store";

function CopyBlock({ label, data }: { label: string; data: unknown }) {
  const [copied, setCopied] = useState(false);
  const json = JSON.stringify(data, null, 2);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable, the admin can still select and copy manually.
    }
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-xs font-semibold uppercase tracking-wide text-navy">{label}</h4>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50"
        >
          {copied ? "Copied!" : "Copy JSON"}
        </button>
      </div>
      <pre className="max-h-80 overflow-auto rounded-md border border-gray-200 bg-gray-50 p-4 text-xs text-gray-700">
        {json}
      </pre>
    </div>
  );
}

export function ExportPanel() {
  const { products, siteConfig, siteContent, restoreDefaults } = useAdminStore();
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetting, setResetting] = useState(false);

  return (
    <div className="max-w-3xl">
      <h2 className="font-display text-2xl text-ink">Backup &amp; Reset</h2>
      <p className="mt-2 text-sm text-gray-600">
        Everything in Products &amp; Pricing and Website Content saves straight to Aulea&apos;s
        database and is live for every visitor immediately, there&apos;s no separate publish step
        and nothing here is required to make an edit real. This tab is for backups and for
        starting over.
      </p>

      <div className="mt-8 space-y-8">
        <CopyBlock label="Products" data={products} />
        <CopyBlock label="Business Info (site-config)" data={siteConfig} />
        <CopyBlock label="Website Content" data={siteContent} />
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Restore original defaults
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Overwrites the live database with the values this site originally shipped with,
          discarding every edit made since. This is real and immediate, copy the JSON above first
          if you might want any of the current data back.
        </p>
        {confirmReset ? (
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              disabled={resetting}
              onClick={async () => {
                setResetting(true);
                await restoreDefaults();
                setResetting(false);
                setConfirmReset(false);
              }}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
            >
              {resetting ? "Restoring…" : "Confirm restore"}
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="mt-3 rounded-md border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Restore original defaults
          </button>
        )}
      </div>
    </div>
  );
}
