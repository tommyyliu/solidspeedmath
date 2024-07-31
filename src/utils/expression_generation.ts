import {random, floor, randomInt} from 'mathjs';
import mathProblem from "../components/MathProblem";

const operators = ['+', '*'];

export interface MathProblemProps {
    digits: number;
    operator: '+' | '*';
}

export function generateExpression(MathProblemProps mathProblemProps) {
  const min = 10 ** (digits - 1);
  const max = 10 ** digits - 1;

  const num1 = randomInt(min, max);
  const num2 = randomInt(min, max);

  return `${num1} ${operator} ${num2}`;
}
