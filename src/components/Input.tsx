export const Input: React.FC<{
  onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChangeEvent }) => {
  return (
    <>
      <p>
        <label htmlFor="text">Type a number to add/substract:</label>
      </p>
      <input id="text" type="text" placeholder="0" onChange={onChangeEvent} />
    </>
  );
};
