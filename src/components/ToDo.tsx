import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";


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
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // todo update
      const newToDo = { text, id, category: name as any };
      // replace the toDo in the index "targetOmdex" with "newToDo"
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  // Todo 삭제
  const handleRomoveToDo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      // index가 같은지 비교하는 함수
      let newToDos = oldToDos.filter((toDo) => toDo.id !== id);
      // todo update
     return newToDos;
    }
    );
  }
  return (
    <li>
      <span>{text}</span>
      {/* 카테고리가 "값" 이 아닐 때만 값을 보여준다. */}
      {category !== Categories.DOING && (
        <button name={Categories.DOING } onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
        <button  onClick={handleRomoveToDo}>
          ❌
        </button>
    </li>
  );
}

export default ToDo;
