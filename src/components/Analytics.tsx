import Script from "next/script";
import { gaMeasurementId } from "@/lib/analytics";

/** Renders nothing until NEXT_PUBLIC_GA_MEASUREMENT_ID is configured. */
export function Analytics() {
  if (!gaMeasurementId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}');`}
      </Script>
    </>
  );
}
