import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { PiTrashFill } from "react-icons/pi";
import { IconButton } from "@material-tailwind/react";
const CompletePages = ({ item, index }) => {
  const {
    handleDeleteComplete
  } = useContext(TodoContext);

  return (
    <div className="todo-list flex h-56 my-2 ml-2" key={index}>
      <div className="todo-list-item border p-2 w-full rounded dark:border-gray-300 bg-gray-200 dark:bg-gray-400/25 border-gray-400 my-2 flex flex-col justify-between" >
        <div className="mt-2">

          <h3 className="task font-ptsans border-b dark:border-gray-300 border-gray-400 text-2xl cursor-not-allowed dark:text-gray-300 text-gray-900  ml-1">{item.title}</h3>
          <p className="description font-ptsans cursor-not-allowed dark:text-gray-300 text-gray-900 mt-1 ml-2">{item.desc}</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-xs font-kanit dark:text-gray-400 text-gray-700">{item.id}</p>
          <p className="text-xs font-ptsans dark:text-gray-400 text-gray-700">{item.date}</p>
        </div>
      </div>
      <div className="mb-2 mx-2 flex items-end">
        <IconButton onClick={() => handleDeleteComplete(index)}>
          <span><PiTrashFill /></span>
        </IconButton>
      </div>
    </div>
  )
}

export default CompletePages;