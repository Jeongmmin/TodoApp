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
 */

/**
 * 1) find to do based on id [2]
 * 
 */

// [
//   {
//       "text": "5",
//       "id": 1649777620793,
//       "category": "TO_DO"
//   },
//   {
//       "text": "4",
//       "id": 1649777619863,
//       "category": "TO_DO"
//   },
//   {
//       "text": "3",
//       "id": 1649777619158,
//       "category": "TO_DO"
//   },
//   {
//       "text": "2",
//       "id": 1649777618397,
//       "category": "TO_DO"
//   },
//   {
//       "text": "1",
//       "id": 1649777618074,
//       "category": "TO_DO"
//   }
// ]