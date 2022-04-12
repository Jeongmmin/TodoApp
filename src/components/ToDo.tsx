import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  // toDo state를 수정하기 위함
  const setToDos = useSetRecoilState(toDoState);

  // 카테고리의 상태를 바꾸는 함수
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    // target의 현재 경로 찾기
    setToDos((oldToDos) => {
      // index가 같은지 비교하는 함수 
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
      // todo를 update해야 한다.
      const oldToDo = oldToDos[targetIndex];
      const newTodo = {text, id, category: name}
      // replace the toDo in the index "targetOmdex" with "newToDo"
      console.log(oldToDo, newTodo)
      return oldToDos;
    })
  };
  return (
    <li>
      <span>{text}</span>
      {/* 카테고리가 "값" 이 아닐 때만 값을 보여준다. */}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
