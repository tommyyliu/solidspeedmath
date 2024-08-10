import { createSignal } from 'solid-js';
import {Operator} from "../utils/expression_generation";

interface SidebarProps {
  onDigitsChange: (digits: number) => void;
  onOperatorChange: (operator: Operator) => void;
}

function Sidebar(props: SidebarProps) {
  const [digits, setDigits] = createSignal(2);
  const [operator, setOperator] = createSignal<Operator>('+');

  const updateProps = () => {
      props.onDigitsChange(digits());
      props.onOperatorChange(operator());
  }

  return (
    <div class="sidebar">
      <h2>Settings</h2>
      <div>
        <label for="digits">Number of Digits:</label>
        <input
          type="number"
          id="digits"
          value={digits()}
          onChange={(e) => setDigits(e.currentTarget.valueAsNumber)}
        />
      </div>
      <div>
        <label for="operator">Operator:</label>
        <select
          id="operator"
          value={operator()}
          onChange={(e) => setOperator(e.currentTarget.value as Operator)}
        >
          <option value="+">+</option>
          <option value="*">*</option>
        </select>
      </div>
      <button onClick={updateProps}>
        Apply
      </button>
    </div>
  );
}

export default Sidebar;