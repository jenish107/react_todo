import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";

function App() {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")) || []);
  const [input_task, setInput_task] = useState("");
  const [chack_task, setChack_task] = useState([]);
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("chack_task", JSON.stringify(chack_task));
  }, [task, chack_task]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function add_task() {
    setTask([...task, input_task]);
  }

  function delete_task(del_index) {
    setTask(task.filter((data, index) => index !== del_index));
  }

  function add_chack_task(chack_index) {
    {
      chack_task.includes(chack_index)
        ? setChack_task(chack_task.filter((data) => data !== chack_index))
        : setChack_task([...chack_task, chack_index]);
    }
  }

  return (
    <>
      <div className="p-5 lh-2">

        <h1 className="mb-2">Todo List</h1>

        <h4>{dateTime}</h4>
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            name="input_task"
            value={input_task}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setInput_task(e.target.value)}
            id=""
          />
          <button onClick={add_task}>add</button>
        </div>

        <List
          tasks={task}
          delete_task={delete_task}
          chack_task={chack_task}
          add_chack_task={add_chack_task}
        />
      </div>
    </>
  );
}

export default App;
