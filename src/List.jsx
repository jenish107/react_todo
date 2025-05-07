import { MdOutlineDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import "./List.css";

export default function List({
  tasks,
  delete_task,
  chack_task,
  add_chack_task,
}) {
  return (
    <>
      {tasks.map((text, index) => {
        return (
          <div
            key={index}
            className="shadow flex items-center justify-between bg-indigo-700 mt-2 rounded-lg p-2 text-"
            style={{
              textDecoration: chack_task.includes(index)
                ? "line-through"
                : "none",
            }}
          >
            <div>{text}</div>
            <div className="icons">
              <div onClick={() => add_chack_task(index)}>
                <FaCheckCircle />
              </div>
              <div className="rounded-full bg-red-600" onClick={() => delete_task(index)}>
                <MdOutlineDelete />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
