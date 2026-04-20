import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import RouteTracker from "@/components/RouteTracker";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Woodhouse Realty | Modern Real Estate Brokerage BC",
  description:
    "A modern real estate brokerage delivering strategy, results, and exceptional client service across British Columbia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <Script
          id="tracker-click-filter"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("click", function(e) {
                var el = e.target;
                var tag = (el.tagName || "").toUpperCase();
                if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA" || tag === "OPTION") {
                  e.stopPropagation();
                  return;
                }
                if (el.closest && el.closest("form")) {
                  var isSubmitBtn = false;
                  var check = el;
                  for (var i = 0; i < 5 && check && check !== document.body; i++) {
                    var t = (check.tagName || "").toUpperCase();
                    if ((t === "BUTTON" && check.type === "submit") || (t === "INPUT" && check.type === "submit")) {
                      isSubmitBtn = true;
                      break;
                    }
                    check = check.parentElement;
                  }
                  if (!isSubmitBtn) { e.stopPropagation(); }
                }
              }, true);
            `,
          }}
        />
        <Script
          src="https://tracker-worker.green-feather-9c2c.workers.dev/tracker.js"
          data-key="daf5f4f9-d985-40a6-948a-3a2d656bcc4c"
          strategy="afterInteractive"
        />
        <Script
          id="tracker-debug"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var el = document.querySelector('script[src*="tracker.js"]');
                if (!el) { console.error("[CRM] tracker.js script tag not found in DOM"); return; }
                el.addEventListener("load", function() {
                  console.log("[CRM] tracker.js loaded ✓ — window.crmTracker:", window.crmTracker);
                });
                el.addEventListener("error", function(e) {
                  console.error("[CRM] tracker.js FAILED to load — check Network tab", e);
                });
              })();
            `,
          }}
        />
        <RouteTracker />
        {children}
      </body>
    </html>
  );
}
