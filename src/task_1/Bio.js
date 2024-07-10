function Bio({ name, born, died, occupation, language }) {
  return (
    <div className="square li">
      <h2>{name}</h2>
      <li><b>Years of life:</b> {born} - {died}</li>
      <li><b>Occupation:</b> {occupation}</li>
      <li><b>Language:</b> {language}</li>
    </div>
  );
}

export default Bio;