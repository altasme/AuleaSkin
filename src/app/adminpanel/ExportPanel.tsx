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
  const { products, siteConfig, siteContent, savedAt, resetAll } = useAdminStore();
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <div className="max-w-3xl">
      <h2 className="font-display text-2xl text-ink">Export &amp; Sync</h2>
      <p className="mt-2 text-sm text-gray-600">
        This site has no database or backend yet, everything above is saved to{" "}
        <strong>this browser only</strong> (localStorage). It does not change what customers see on
        the live site. To make an edit here real:
      </p>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-gray-600">
        <li>Make your changes in the Products or Website Content tabs.</li>
        <li>Copy the JSON below.</li>
        <li>Send it to your developer, or paste it into the matching file yourself if you&apos;re comfortable in code (<code>src/data/products.ts</code>, <code>src/lib/site-config.ts</code>, <code>src/data/site-content.ts</code>).</li>
        <li>They commit it and redeploy. Only then does everyone see the change.</li>
      </ol>
      <p className="mt-3 text-xs text-gray-400">
        {savedAt ? `Last edit in this browser: ${new Date(savedAt).toLocaleString()}` : "No edits made in this browser yet."}
      </p>

      <div className="mt-8 space-y-8">
        <CopyBlock label="Products" data={products} />
        <CopyBlock label="Business Info (site-config)" data={siteConfig} />
        <CopyBlock label="Website Content" data={siteContent} />
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-red-600">Reset</h3>
        <p className="mt-1 text-sm text-gray-600">
          Clears everything saved in this browser and restores the values currently live in the
          codebase. Doesn&apos;t affect the live site either way.
        </p>
        {confirmReset ? (
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={() => {
                resetAll();
                setConfirmReset(false);
              }}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              Confirm reset
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
            Reset all changes
          </button>
        )}
      </div>
    </div>
  );
}
