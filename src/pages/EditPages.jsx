import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import ButtonUi from "../components/UI/Button";
import { Textarea, Input } from "@material-tailwind/react";

const EditPages = ({ index }) => {
  const {
    handleUpdateTitle,
    handleUpdateDesc,
    handleUpdate,
    editedItem,
  } = useContext(TodoContext);

  const handleEnter = (e) => {
    if (e.key === "Enter") handleUpdate();
  };

  return (
    <div key={index} className='todo-list-item  w-full  mt-3 py-2 ' onKeyDown={handleEnter}>
      <div className="space-y-3 mx-2 ">
        <Input variant="standard" label="New Daily?" className="bg-gradient-to-b dark:bg-none from-white to-gray-50" value={editedItem.title} onChange={e => handleUpdateTitle(e.target.value)} />
        <Textarea variant="standard" label="New Activity" className="bg-gradient-to-b dark:bg-none from-white to-gray-50" onChange={e => handleUpdateDesc(e.target.value)} value={editedItem.desc}>
        </Textarea>
      </div>
      <ButtonUi className='btn w-full hover:shadow-sm hover:bg-opacity-70 dark:hover:bg-gray-200 dark:bg-gray-500 dark:text-gray-900' onClick={handleUpdate}>Update</ButtonUi>
    </div>
  );
};

export default EditPages;