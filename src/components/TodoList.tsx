import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";




function TodoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {/* to do list */}
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


// toDo의 category를 수정하려면?
/**
 * 1) to do가 어디있는지를 알아야 한다. -> id로 todo 찾기 todo의 index찾는 방법만 알면 된다.
 * 
 * 2) new toDo 만들기
 * 
 * 3) targetIndex의 Todo를 new ToDo로 바꾸기
 * 
 * 4) 배열의 원소를 어떻게 교체하는지를 알기
 *    
 *      slice를 사용하면 배열을 자를 수 있다.
 * 
 */

