import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const ContextProvider = ({ children }) => {
  let [allTask, setAllTask] = useState([
    {
      id: crypto.randomUUID(),
      nameTask: "Do coding challenges",
      status: false
    }
  ]);
  const handleDeleteTask = (index) => {
    const updateTask = [...allTask];
    updateTask.splice(index,1);
    setAllTask(updateTask);
  };
  const [inputTask, setInputTask] = useState("");
  const onChangeHandler = (e) => {
    setInputTask(e.target.value)
  };
  const addTask = () => {
    if (inputTask === ""){
      alert ("Task is not empty")
    } else {
      let checked = true;
      allTask.forEach((item) => {
        if (inputTask === item.nameTask) {checked = false}
      });
      if (checked === false) alert("Task is already existed");
      else 
      setAllTask((prew) => [
    ...prew,{id: crypto.randomUUID(),nameTask: inputTask, status: false}]);
    }
    setAllTask("");
  };

  let renderAllTask = () => {
    return allTask.map((item, index) => {
      return <div key="index" className="d-flex justify-content-between">
        <span><input type="checkbox" /> {item.nameTask}</span>
      </div>
    })
  }


  let taskActive = () => {
    return allTask.map((item, index) => {
      if (item.status){
        return <div key="index" className="d-flex justify-content-between">
        <span><input type="checkbox" /> {item.nameTask}</span>
      </div>
      };
    })
  };

  let taskCompleted = () => {
    return allTask.map((item, index) => {
      if (!item.status){
        return <div key="index" className="d-flex justify-content-between">
        <span className="p-2 w-100"><input type="checked" /> {item.nameTask}</span>
        <button onClick={handleDeleteTask} className="p-2 flex-shrink-1">Delete</button>
      </div>
      };
    })
  };

  return (
    <Context.Provider
      value={{
        handleDeleteTask,
        addTask,
        renderAllTask,
        taskActive,
        taskCompleted,
        onChangeHandler
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;