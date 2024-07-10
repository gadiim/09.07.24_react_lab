import Bio from './task_1/Bio';
import Work from './task_1/Work';

function App1() {
    return (
        <fieldset>
            <legend>TASK 1</legend>
            <Bio
                name="William Shakespeare"
                born="1564"
                died="1616 "
                occupation="Poet"
                language="English"
            />
            <hr></hr>
            <Work
                title="Hamlet"
                characters="Hamlet, Claudius, Gertrude, Polonius, Ophelia, Laertes, Horatio"
                genre="Tragedy"
                setting="Denmark"
            />
        </fieldset>
    );
}

export default App1;