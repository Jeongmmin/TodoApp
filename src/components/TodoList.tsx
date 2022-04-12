import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList() {
  // toDo는 쓰지만 toDo를 수정하는 setToDos는 안 쓴다.
  // const [toDos, setToDos] = useRecoilState(toDoState);
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {/* to do list */}
      <ul>
        {/* {toDos.map((toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id} /> */}
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

// atom으로 연결되어서 props를 쓰지 않아도 된다!!

/**
 * {toDos.map((toDo) => (
          <ToDo {...toDo} />
        ))} 
    이렇게 써도 동작하는 이유 => toDos 배열의 toDo 원소 하나하나가 ToDo 컴포넌트에 필요한 props와 같은 모양이기 때문

    즉, ToDo 컴포넌트에 필요한 prop이 IToDo interface임 / state의 타입은 interface IToDo의 배열임
 * 
 * prop의 이름이 달랐다면 작동하지 않았을 것이다.
 */
