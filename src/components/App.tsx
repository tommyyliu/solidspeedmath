import MathProblem from "./MathProblem";
import Sidebar from './Sidebar';
import {createSignal} from "solid-js";

function App() {
    const [digits, setDigits] = createSignal(2);
    const [operator, setOperator] = createSignal<'+' | '*'>('+');

    return (
        <div>
            <Sidebar
                onDigitsChange={(digits) => setDigits(digits)}
                onOperatorChange={(operator) => setOperator(operator)}
            />
            <MathProblem digits={digits()} operator={operator()}/>
        </div>
    );
}

export default App;
