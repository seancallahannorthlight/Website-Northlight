import { firm } from "@/lib/content";

// Google Maps embed of the office (33 Glasshouse Street). Uses the standard
// keyless embed URL, so no API key or account is needed.
// Note: Google may set cookies when the map loads.
// The grayscale filter keeps the map in line with the site's muted palette;
// remove `grayscale` from the className to show Google's normal colours.
export default function LocationMap() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    firm.mapsQuery,
  )}&z=16&output=embed`;

  return (
    <iframe
      src={src}
      title="Map showing Northlight Group at 33 Glasshouse Street, London"
      className="h-full min-h-[300px] w-full border-0 grayscale"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
