import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { FiEdit2 } from "react-icons/fi";
import { PiTrashFill } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { IconButton } from "@material-tailwind/react";
import { HiBars2 } from "react-icons/hi2";
import { VscTriangleRight } from "react-icons/vsc";

const TodoPages = ({ item, index }) => {
  const {
    handleDelete,
    handleComplete,
    handleEdit,
    displayScreen,
    handleOpen,
  } = useContext(TodoContext);
  
  return (
    <div className="todo-list flex h-56 my-2 justify-between " key={index}   >
      
      <div className={`todo-list-item border border-gray-400 rounded p-2  duration-200 transition-all ${displayScreen[item.id] ? "w-[92%]" :"w-full"} flex flex-col justify-between`} >
      
        <div className="mt-2 ">
      
          <div className="flex justify-between dark:border-gray-300 border-gray-400 border-b">
            <h3 className="task font-ptsans   text-2xl dark:text-gray-300 text-gray-900">{item.title}</h3>
            <IconButton className={`ml-1 mb-2 ${displayScreen[item.id] ? "opacity-50": "opacity-100"} text-xl hover:shadow-sm`} onClick={() => handleOpen(item.id)}>
              {displayScreen[item.id] ?
                <VscTriangleRight  />
                :
                <HiBars2 />
              }
            </IconButton>
          </div>
          <p className="description font-ptsans dark:text-gray-300 text-gray-900 text-lg mt-1 ml-2">{item.desc}</p>
        </div>

        <div className="w-full flex justify-between items-end">
              <p className="font-kanit text-xs text-gray-700 dark:text-gray-500">{item.id}</p>
          <p className="text-xs font-ptsans text-gray-700 dark:text-gray-500">{item.date}</p>
        </div>

      </div>

      <div className={`${displayScreen[item.id] ? "inline" : "hidden"} transition-all duration-100 flex flex-col  mx-2 gap-y-2`}>
        <IconButton className="text-xl bg-gray-800" onClick={() => handleDelete(index)}>
          <PiTrashFill />
        </IconButton>
        <IconButton className="text-xl bg-gray-800" onClick={() => handleComplete(index)}>
          <GiCheckMark />
        </IconButton>
        <IconButton className="text-xl bg-gray-800" onClick={() => handleEdit(index, item)}>
          <FiEdit2 />
        </IconButton>
      </div>
    </div>
  )
}

export default TodoPages;