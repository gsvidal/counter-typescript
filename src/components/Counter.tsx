export const Counter: React.FC<{
  counter: number;
  onAdd: () => void;
  onSubstract: () => void;
  inputValue: number;
}> = ({ counter, onAdd, onSubstract, inputValue }) => {
  return (
    <>
      <p>
        Counter: <span>{counter}</span>
      </p>
      <button type="button" onClick={onSubstract}>
        Substract {inputValue}
      </button>
      <button type="button" onClick={onAdd}>
        Add {inputValue}
      </button>
    </>
  );
};
