import Sidebar from './Sidebar';
import {createSignal} from "solid-js";
import {Operator} from "../utils/expression_generation";
import PracticeSpace from "./PracticeSpace";

function App() {
    const [digits, setDigits] = createSignal(2);
    const [operator, setOperator] = createSignal<Operator>('+');

    return (
        <div>
            <Sidebar
                onDigitsChange={(digits) => setDigits(digits)}
                onOperatorChange={(operator) => setOperator(operator)}
            />
            <PracticeSpace mathProblemProps={{digits: digits(),operator: operator()}}/>
        </div>
    );
}

export default App;
