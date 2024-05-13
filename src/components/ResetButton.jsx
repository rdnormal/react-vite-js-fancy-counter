import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleClick = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button className="reset-btn">
      <ResetIcon className="reset-btn-icon" onClick={handleClick} />
    </button>
  );
}
