import { usePlanets } from "../../hooks/usePlanets";
import "./index.css";

export default function PlanetGrid() {
  const { planets, loading, error } = usePlanets();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <div className="planet-description">
        <h2>Visualizing the Differences Between Planets</h2>
        <p className="second-desc">
          Each planet in out solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestial
          planets are from gas giants and ice giants.{" "}
        </p>
      </div>
      <div className="planet-container">
        {planets.map((planet) => (
          <div key={planet.id} className="planet-card">
            <img
              src={planet.image}
              alt={planet.name}
              className="planet-image"
            />
            <div className="label">
              <p>{planet.id}</p>
              <p>Distance from Sun: {planet.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
