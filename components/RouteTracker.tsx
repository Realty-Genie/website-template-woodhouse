"use client";
import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function RouteTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      console.log("[CRM] RouteTracker mounted — skipping initial page_view (tracker.js handles it). window.crmTracker:", window.crmTracker);
      return;
    }
    const currentUrl =
      window.location.origin +
      pathname +
      (searchParams.toString() ? `?${searchParams.toString()}` : "");
    console.log("[CRM] Route changed → page_view:", currentUrl, "| crmTracker available:", !!window.crmTracker);
    if (window.crmTracker) {
      window.crmTracker.track("page_view", { url: currentUrl });
      console.log("[CRM] page_view tracked ✓");
    } else {
      console.warn("[CRM] page_view SKIPPED — window.crmTracker is undefined");
    }
  }, [pathname, searchParams]);

  return null;
}

export default function RouteTracker() {
  return (
    <Suspense fallback={null}>
      <RouteTrackerInner />
    </Suspense>
  );
}
