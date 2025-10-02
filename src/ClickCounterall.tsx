// import css from "./global.css";

interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export default function ClickCounterall({
  value,
  onUpdate,
}: ClickCounterProps) {
  return <button onClick={onUpdate}>Clicked: {value}</button>;
}
