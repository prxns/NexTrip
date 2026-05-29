const GOOGLE_MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

type ComputeRoutesResponse = {
  routes?: Array<{
    distanceMeters?: number;
    duration?: string;
  }>;
};

export async function calculateRouteDistanceMiles(
  origin: string,
  destination: string
): Promise<number | null> {
  const cleanOrigin = origin.trim();
  const cleanDestination = destination.trim();

  if (!cleanOrigin || !cleanDestination) {
    return null;
  }

  if (!GOOGLE_MAPS_API_KEY) {
    console.error(
      "Missing VITE_GOOGLE_MAPS_API_KEY in .env"
    );
    return null;
  }

  try {
    const response = await fetch(
      "https://routes.googleapis.com/directions/v2:computeRoutes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
          "X-Goog-FieldMask":
            "routes.distanceMeters,routes.duration",
        },
        body: JSON.stringify({
          origin: {
            address: cleanOrigin,
          },
          destination: {
            address: cleanDestination,
          },
          travelMode: "DRIVE",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response
        .text()
        .catch(() => "");
      console.error(
        "Routes API error:",
        response.status,
        errorText
      );
      return null;
    }

    const data =
      (await response.json()) as ComputeRoutesResponse;

    const meters = data.routes?.[0]?.distanceMeters;

    if (typeof meters !== "number") {
      return null;
    }

    const miles = meters * 0.000621371;

    return Math.max(1, Math.round(miles));
  } catch (error) {
    console.error(
      "Failed to calculate route distance:",
      error
    );
    return null;
  }
}