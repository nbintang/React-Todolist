import { useState, useEffect, createContext } from "react";
import Dates from "../components/hooks/DatesHooks";

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [completeScreen, setCompleteScreen] = useState(false);
  const [displayScreen, setDisplayScreen] = useState({});
  const [allTodos, setAllTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completeTodos, setCompleteTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [editedItem, setEditedItem] = useState("");
  const dates = Dates();


  const handleOpen = (itemid) => {
    setDisplayScreen({
      ...displayScreen,
      [itemid]: !displayScreen[itemid]
    });
  };

  const handleAdd = () => {
    const ids = allTodos.length + 1
    let list = {
      id: ids,
      title: title,
      desc: description,
      date: dates
    };
    let addTodos = [...allTodos];
    if (list.title === "") {
      alert("please fullfill the list!");
    } else if (list.desc === "") {
      alert("please fullfill the desc");
    } else {
      addTodos.push(list);
      localStorage.setItem('todolist', JSON.stringify(addTodos));
      setAllTodos(addTodos);
    };
  };



  const handleDelete = index => {
    let listDelete = [...allTodos];
    listDelete.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(listDelete));
    setAllTodos(listDelete);
  };

  const handleComplete = index => {
    let completeList = {
      ...allTodos[index],
      date: dates
    }
    let newListComplete = [...completeTodos];
    newListComplete.push(completeList);
    setCompleteTodos(newListComplete);
    handleDelete(index)
    localStorage.setItem('completelist', JSON.stringify(newListComplete));
  };

  const handleDeleteComplete = index => {
    let deleteComplete = [...completeTodos];
    deleteComplete.splice(index, 1);
    localStorage.setItem('completelist', JSON.stringify(deleteComplete))
    setCompleteTodos(deleteComplete);
  };

  const handleEdit = (index, item) => {
    setCurrentEdit(index);
    setEditedItem(item)
  };

  const handleUpdateTitle = (value) => {
    setEditedItem(prev => {
      return { ...prev, title: value }
    });
  };

  const handleUpdateDesc = (value) => {
    setEditedItem(prev => {
      return { ...prev, desc: value }
    });
  };

  const handleUpdate = () => {
    let newTodos = [...allTodos];
    newTodos[currentEdit] = { ...editedItem, date: dates + " (Edited)" };
    if (editedItem.title === "" || editedItem.desc === "") {
      alert("Please fullfill the List!")
    } else {
      setAllTodos(newTodos);
      setCurrentEdit(-1);
      localStorage.setItem("todolist", JSON.stringify(newTodos));
    };
  };

  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem('todolist'));
    const saveComplete = JSON.parse(localStorage.getItem('completelist'));
    if (saveTodos) setAllTodos(saveTodos);
    if (saveComplete) setCompleteTodos(saveComplete);
  }, []);

  return (
    <TodoContext.Provider
      value={
        {

          description,
          title,
          setTitle,
          setDescription,
          allTodos,
          completeTodos,
          currentEdit,
          editedItem,
          handleAdd,
          handleComplete,
          handleDelete,
          handleUpdate,
          handleDeleteComplete,
          handleUpdateTitle,
          handleUpdateDesc,
          handleEdit,
          completeScreen,
          setCompleteScreen,
          displayScreen,
          setDisplayScreen,
          handleOpen
        }
      }>

      {children}
    </TodoContext.Provider>
  )
}