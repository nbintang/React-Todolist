import { useState } from "react";

export default function useShowClick () {
  const [showClicked, setShowClicked] = useState(false);
  const clickedButton = () => {
    setShowClicked(true);
    setTimeout(() => {
      setShowClicked(false);
    }, 2500);
  };
  return {showClicked, clickedButton, setShowClicked};
};