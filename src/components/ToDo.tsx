import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      {text} <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;

// key 값을 안 주면 오류가 난다.
