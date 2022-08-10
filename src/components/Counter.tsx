export const Counter: React.FC<{
  counter: number;
  onAdd: () => void;
  onSubstract: () => void;
}> = (props) => {
  return (
    <>
      <p>
        Counter: <span>{props.counter}</span>
      </p>
      <button type="button" onClick={props.onAdd}>
        Add 1
      </button>
      <button type="button" onClick={props.onSubstract}>
        Substract 1
      </button>
    </>
  );
};
