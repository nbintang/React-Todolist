import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import useShowClick from "../components/hooks/ShowClicked";
import {
  TodoPages,
  EditPages,
  CompletePages,
  NoAct
} from "../components/export/ExportModule";
import SkeletonLayout from "../components/Layout/Skeleton";

export default function SliderPages() {

  const {
    completeScreen,
    allTodos,
    currentEdit,
    completeTodos
  } = useContext(TodoContext);
  return (
    <>
      {allTodos.length === 0 && completeTodos.length === 0 ? (
        <NoAct />
      ) : (
        !completeScreen ? (
          allTodos.map((item, index) => (
            currentEdit === index ? (
              <EditPages key={index} />
            ) : (
              <SkeletonLayout key={index}><TodoPages key={index} index={index} item={item} /></SkeletonLayout>
            )
          ))
        ) : (
          completeTodos.map((item, index) => (
            <SkeletonLayout key={index}>
              <CompletePages key={index} index={index} item={item} />
            </SkeletonLayout>
          ))
        )
      )}
    </>
  );

};