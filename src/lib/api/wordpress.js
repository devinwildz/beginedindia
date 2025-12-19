// lib/api/wordpress.js
import { WP_BASE, HOME_SLUG, REVALIDATE_TIME } from "@/lib/config";

export async function getHomePage() {
  const res = await fetch(
    `${WP_BASE}/wp/v2/pages?slug=${HOME_SLUG}&acf_format=standard`,
    {
      next: { revalidate: REVALIDATE_TIME },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch home page");
  }

  const data = await res.json();

  return data[0]?.acf || null;
}

