import { usePlanets } from "../../hooks/usePlanets";
import "./index.css";

export default function PlanetTable() {
  const { planets, loading, error } = usePlanets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div class="section-3">
      <h2>Planetary Facts at a Glance</h2>
      <p>
        Below is a comparison table of major planets in our solar system. The
        data highlights key physical properties used by astronomers, and
        researchers worldwide.
      </p>
      <figure>
        <figcaption>
          Data about the planets of our solar system(Planetary facts taken from
          Nasa)
        </figcaption>
        <table id="table-1">
          <thead className="header-color">
            <tr>
              <th colspan="2"></th>
              <th>Name</th>
              <th>Mass(10 24kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m3)</th>
              <th>Gravity (m/s2)</th>
            </tr>
          </thead>
          <tbody className="bg-color">
            <tr>
              <td colspan="2" rowspan="4" id="diff-color1">
                Terrestial Planets
              </td>
              <td>Mercury</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Venus</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Earth</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Mars</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td rowspan="4" colspan="1" id="diff-color2">
                Jovian Planets
              </td>
              <td rowspan="2" colspan="1" id="diff-color3">
                Gas Giants
              </td>
              <td>Jupitar</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Saturn</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td rowspan="2" colspan="1" id="diff-color4">
                Ice Giants
              </td>
              <td>Uranus</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Neptune</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td colspan="2" id="diff-color5">
                Dwarf Planets
              </td>
              <td>Pluto</td>
              <td>0.330</td>
              <td>4.878</td>
              <td>5427</td>
              <td>3.7</td>
            </tr>
          </tbody>
        </table>
      </figure>
    </div>
  );
}
