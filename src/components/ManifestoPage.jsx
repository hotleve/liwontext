import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ManifestoPage() {
  const { id } = useParams();
  const [manifestos, setManifestos] = useState([]);
  const navigate = useNavigate();
  const idx = parseInt(id);

  useEffect(() => {
    fetch("/manifestos.json")
      .then(res => res.json())
      .then(data => setManifestos(data));
  }, []);

  const manifesto = manifestos.find((m) => m.id === idx);

  if (!manifesto) return <div>로딩 중...</div>;

  return (
    <div>
      <h2>{manifesto.title}</h2>
      <p>{manifesto.content}</p>

      <div>
        {idx > 1 && (
          <Link to={`/manifesto/${idx - 1}`}>← 이전</Link>
        )}
        {" "}
        {idx < manifestos.length && (
          <Link to={`/manifesto/${idx + 1}`}>다음 →</Link>
        )}
      </div>

      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
