import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from "../atoms";

// function ToDo({ text, category }: IToDo) {
//   // 카테고리의 상태를 바꾸는 함수
//   const onClick = (newCategory: IToDo["category"]) => {
//     console.log("i wanna go to", newCategory)
//   }
//   return (
//     <li>
//       <span>{text}</span>
//       {/* 카테고리가 "값" 이 아닐 때만 값을 보여준다. */}
//       {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button>}
//       {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
//       {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button>}
//     </li>
//   );
// }

// 새로운 방법
function ToDo({ text, category, id }: IToDo) {

  // toDo state를 수정하기 위함
  const setToDos = useSetRecoilState(toDoState)

  // 카테고리의 상태를 바꾸는 함수
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget: {name}} = event;
    console.log("i wanna go to", )
  }
  return (
    <li>
      <span>{text}</span>
      {/* 카테고리가 "값" 이 아닐 때만 값을 보여준다. */}
      {category !== "DOING" && <button name="DOING" onClick={onClick} >Doing</button>}
      {category !== "TO_DO" && <button name="TO_DO" onClick={onClick} >To Do</button>}
      {category !== "DONE" && <button name="DONE" onClick={onClick} >Done</button>}
    </li>
  );
}

export default ToDo;

// key 값을 안 주면 오류가 난다.
/**
 * onClick={() => onClick(newCategory)
 * 
 * 인자를 넘기고 싶으니까 onClick 함수를 호출하는 익명 함수를 새로 선언하자
 * 
 * onClick={onClick} 이렇게 해도 작동은 하지만, 인자가 넘겨지지 않을 것
 * 
 */
