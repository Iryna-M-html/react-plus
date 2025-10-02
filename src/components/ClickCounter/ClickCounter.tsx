import { useState } from "react";
import css from "./ClickCounter.module.css";
export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button className={css.clickCounter} onClick={handleClick}>
      Clicked: {clicks}
    </button>
  );
}
