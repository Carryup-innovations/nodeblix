const configuredId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const gaMeasurementId = /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : "";

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", name, params);
}
