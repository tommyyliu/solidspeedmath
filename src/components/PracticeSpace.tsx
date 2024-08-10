import {createEffect, createMemo, createSignal, JSX} from "solid-js"
import {generateExpression, MathProblemProps} from "../utils/expression_generation";
import {evaluate} from 'mathjs'

interface PracticeSpaceProps {
    mathProblemProps: MathProblemProps,
}

function PracticeSpace(props: PracticeSpaceProps) {
    const [expression, setExpression] = createSignal("");
    const answer = createMemo(() => evaluate(expression()))

    createEffect(() => {
        setExpression(generateExpression(props.mathProblemProps));
    });


    const handleInput: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
        if (event.currentTarget.value == answer()) {
            event.currentTarget.value = '';
            setExpression(generateExpression(props.mathProblemProps));
        }
    }

    return (
        <div>
            <p>{expression()}</p>
            <input type="number" onInput={(e) => handleInput(e)}/>
        </div>
    );
}

export default PracticeSpace;
