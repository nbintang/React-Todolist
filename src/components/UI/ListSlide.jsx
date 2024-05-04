import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Button, ButtonGroup } from "@material-tailwind/react";


const ListSlide = () => {
  const {
    completeScreen,
    setCompleteScreen,
  } = useContext(TodoContext);

  const styledClass = "rounded-none text-gray-900 dark:text-gray-500 hover:dark:bg-gray-800";
  const styledClicked = "bg-gray-300  dark:bg-gray-700/15 text-gray-600/80 dark:text-gray-700/80";
  return (
    <div className={`btn-area space-x-2 my-2 flex w-full justify-between sm:justify-start`}>
      <ButtonGroup variant="text" >
        <Button className={`btn  ${styledClass}
          ${completeScreen === false && styledClicked}`}
          onClick={() => setCompleteScreen(false)}>To - do</Button>
        <Button className={`btn   ${styledClass}
          ${completeScreen === true && styledClicked}`}
          onClick={() => setCompleteScreen(true)}>Completed</Button>
      </ButtonGroup>
    </div>
  )
};

export default ListSlide;