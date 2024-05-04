import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import ButtonUi from "./Button";
import { Input } from "@material-tailwind/react";


const InputUi = () => {
  const {
    title,
    description,
    setTitle,
    setDescription,
    handleAdd,
    handleDelete
  } = useContext(TodoContext);

  const handleDeleteKey = e => {
    if(e.key === "Escape" || e.key=== "Esc")handleDelete();
  };

  const handleAddKey = e => {
    if(e.key === "Enter") handleAdd();
  }

  return (
    <div className="todo-input flex  gap-2  items-end flex-wrap justify-start" onKeyDown={handleDeleteKey} >
      <div className="todo-input-item w-full min-w-0  md:w-96">
        <label htmlFor="title" className="text-xl sm:text-2xl font-kanit text-gray-800 dark:text-gray-300">Title</label>
        <div className="mt-2 ">
          <Input variant="standard" label="What's Your Daily?"   type="text" className="input text-gray-700 dark:text-gray-200 placeholder:text-gray-300" onKeyDown={handleAddKey} value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
      </div>
      <div className="todo-input-item w-full min-w-0 md:w-96" >
        <label htmlFor="title" className="title text-xl sm:text-2xl font-kanit text-gray-800 dark:text-gray-300">Description</label>
        <div className="mt-2">
          <Input variant="standard" label="What's Your Activity?" onKeyDown={handleAddKey} type="text" className="input text-gray-700 dark:text-gray-200"  value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
      </div>
      <ButtonUi type="button" className="btn w-full md:w-20 bg-gray-800 rounded  my-0 " onClick={handleAdd}  >Add</ButtonUi>
    </div>
  )
};

export default InputUi;