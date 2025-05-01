import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManifestoList() {
  const [manifestos, setManifestos] = useState([]);

  useEffect(() => {
    fetch("/manifestos.json")
      .then(res => res.json())
      .then(data => setManifestos(data));
  }, []);

  return (
    <div>
      <h1>리원을 위한 매니페스토</h1>
      <ul>
        {manifestos.map((m) => (
          <li key={m.id}>
            <Link to={`/manifesto/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
