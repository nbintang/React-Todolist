import Clock from "../hooks/ClockHooks";
import ThemeBtn from "./ThemeBtn";
import { Alert } from "@material-tailwind/react";
import useShowClick from "../hooks/ShowClicked";


const Title = ({ children, className }) => {
  const {showClicked, clickedButton} = useShowClick();

 

  return (
    <div className={` title todo flex my-2 items-end justify-between border-b `}>
      <h1 className={`${className}  font-kanit mb-2  dark:text-gray-300 font-medium text-gray-800`}>{children}</h1>
      <div className="flex flex-col items-end">
        <div className="flex "  onClick={clickedButton}>
          {showClicked ? 
            <Alert  variant="ghost" className=" text-xs py-3  dark:bg-gray-800 dark:text-gray-400">
              Theme Changed!</Alert> : ""}

          <ThemeBtn className={'text-gray-900 dark:text-gray-400 px-1 text-2xl mx-1'} variant={'text'} />

        </div>
        <Clock className={"text-xs text-gray-900 dark:text-gray-400 sm:text-lg font-ptsans"} />
      </div>
    </div>
  )
}

export default Title;