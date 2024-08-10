import {randomInt} from 'mathjs';

export type Operator = '+' | '*';

export interface MathProblemProps {
    digits: number;
    operator: Operator;
}

export function generateExpression(mathProblemProps: MathProblemProps) {
    const {digits, operator} = mathProblemProps;

    const min = 10 ** (digits - 1);
    const max = 10 ** digits - 1;

    const num1 = randomInt(min, max);
    const num2 = randomInt(min, max);

    return `${num1} ${operator} ${num2}`;
}
