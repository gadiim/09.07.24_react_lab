import Movie from './task_2/Movie';
import img from './task_2/img/Communists_From_Space_poster.webp';

function App2() {
    let t = "Communists From Space!!";
    let d = "Zara Nova";
    let g = "Sci-fi";
    let y = 2024;
    let s = "Starlights Cinemas";
    let c = "Chett Bolder, Petunia Belle";
    return (
        <fieldset>
            <legend>TASK 2</legend>
            <Movie
                title={t}
                poster={img}
                director={d}
                genre={g}
                year={y}
                studio={s}
                cast={c}
            />
        </fieldset>
    );
}

export default App2;