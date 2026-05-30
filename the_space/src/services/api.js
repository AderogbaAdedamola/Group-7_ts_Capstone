export async function fetchPlanets() {
  try {
    const response = await fetch(
      "https://anurella.github.io/json/planets.json",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch planets");
    }

    const data = await response.json();

    return data.map((each) => ({
      name: each.planet,
      id: each.planet,
      distance: each.distanceFromSun,
      image: each.image,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
}
