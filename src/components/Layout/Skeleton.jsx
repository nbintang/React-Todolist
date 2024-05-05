import { useEffect } from "react";
import useShowClick from "../hooks/ShowClicked";
import { Spinner } from "@material-tailwind/react";

export default function SkeletonLayout({children, className}) {
  const { showClicked, setShowClicked } = useShowClick();
  useEffect(() => {
    setShowClicked(true);
    setTimeout(() => {
      setShowClicked(false)
    }, 720);
  }, [])
  return <>
    {
      showClicked ?
        <div className="my-32 justify-center flex gap-5 items-center">
          {/* <h1 className="text-3xl text-gray-600 dark:text-gray-400">Loading List</h1> */}
          <Spinner className={`${className} w-12 h-12 animate-spin text-gray-600 dark:text-gray-400`}/>
        </div>
        :
        <>
        {children}
        </>
    }
  </>
}