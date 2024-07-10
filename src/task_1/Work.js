function Work({ title, characters, genre, setting }) {
    return (
      <div>
        <h3>"{title}"</h3>
        <li><b>Characters:</b> {characters}</li>
        <li><b>Genre:</b> {genre}</li>
        <li><b>Setting:</b> {setting}</li>
      </div>
    );
  }
  
  export default Work;