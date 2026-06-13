"use client";

import { useEffect } from "react";

const BOOKING_URL = "https://linkbio.co/Tattoo-Booking?utm_source=website&utm_medium=website_redirect";

export default function BookingRedirect() {
  useEffect(() => {
    // Replace so the back button doesn't return to this redirect page
    try {
      window.location.replace(BOOKING_URL);
    } catch (e) {
      window.location.href = BOOKING_URL;
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-center p-6">
      <div>
        <h1 className="text-xl font-medium mb-4">Redirecting to booking...</h1>
        <p className="text-sm mb-4">If you are not redirected, tap the button below.</p>
        <a href={BOOKING_URL} rel="noopener noreferrer" target="_blank" className="inline-block bg-gingerbread text-white px-6 py-3 rounded-none">
          Open Booking
        </a>
      </div>
    </main>
  );
}
