import { useEffect, useState } from "react";
import { fetchPlanets } from "../services/api";

export function usePlanets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlanets();
        setPlanets(data);
      } catch (err) {
        setError("Failed to fetch planets");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { planets, loading, error };
}
