import { useEffect } from "react";
import useRandomWords from "../components/hooks/RandomWords"
import useShowClick from "../components/hooks/ShowClicked";
import { Spinner } from "@material-tailwind/react";

export default function NoAct() {
  const { listStrings } = useRandomWords();
  const { showClicked, setShowClicked } = useShowClick();
  useEffect(() => {
    setShowClicked(true);
    setTimeout(() => {
      setShowClicked(false);
    }, 500);
  }, [listStrings]);
  return <>
    <div className={`h-full w-full md:h-full bg-gray-300 dark:bg-gray-800  rounded-md grid place-items-center`}>
      {
        showClicked ?
          <Spinner className="h-20 w-20 text-gray-800/25"/>
          :
          <h1 className="text-lg dark:text-gray-600 text-gray-500">{listStrings}</h1>
      }
    </div>
  </>
}