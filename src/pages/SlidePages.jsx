import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {
  TodoPages,
  EditPages,
  CompletePages,
  NoAct
} from "../components/export/ExportModule";

export default function SliderPages() {
  const {
    completeScreen,
    allTodos,
    currentEdit,
    completeTodos
  } = useContext(TodoContext);
  return <>
    {allTodos.length === 0 && completeTodos.length === 0 ?
      (
        <NoAct />
      ) :
      !completeScreen ? (
        allTodos.map((item, index) => {

          return currentEdit === index ? (
            <EditPages key={index} />
          ) : (
            <TodoPages key={index} index={index} item={item} />
          )
        }
        )
      ) : (
        completeTodos.map((item, index) => {
          return <CompletePages key={index} index={index} item={item} />
        }
        )
      )
    }
  </>
};