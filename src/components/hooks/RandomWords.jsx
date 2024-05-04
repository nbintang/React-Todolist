import { useState, useEffect } from "react";

export default function useRandomWords() {
  const [footerStrings, setFooterString] = useState("");
  const [listStrings, setListStrings] = useState("");
  const [clickStr, setClickStr] = useState("");

  const listRandmStrings = [
    "No activity yet...",
    "No list activity...",
    "No list in here",
    "Store your activity list in here"
  ]

  const string = [
    "MyTodos, make your life more alive!",
    "What's your daily routine?",
    "Don't forget to workout!",
    "Didn't you late for school?",
    "Did you finish your job?"
  ]

  const strClick = [
    "You've found our mystery!",
    "How do you know about this lamp?!",
    "You've clicked our Easter Egg!",
    "Damn..., you're tough enough"
  ]

  useEffect(() => {
    const randomString = Math.floor(Math.random() * string.length)
    setFooterString(string[randomString]);
    const randomListStr = Math.floor(Math.random() * listRandmStrings.length);
    setListStrings(listRandmStrings[randomListStr]);
    const randomClickStr = Math.floor(Math.random() * strClick.length);
    setClickStr(clickStr[randomClickStr])
  }, [])
  return { footerStrings, listStrings, clickStr }
}