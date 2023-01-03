import { useState } from "react";

export const useToggle = (value = false) => {
  const [on, setOn] = useState(value);
  const toggleOn = () => setOn(!on);

  return { on, setOn, toggleOn };
};
