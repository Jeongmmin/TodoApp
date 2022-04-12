import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

// 하나를 교체 해야 한다면? -> 순서가 중요! mango -> 감
/**
 * 1) mango위치 구하기  => targetIndex
 * 2) 배열 두 부분으로 나누기 망고 전/ 망고 후
 */
const food = ["pizza", "mango", "kimchi", "kimbab"];
const front = ["pizza"];
const back = ["kimchi", "kimbab"];
// const lastPart = front + back = >이러면 망고가 없다.
// 망고 대신 뭔가가 들어간 배열을 원한다. / ... => front안의 모든 요소를 풀어놓는다는 의미
const finalPart = [...front, "감", ...back];

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
      // todo를 update해야 한다.
      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      // replace the toDo in the index "targetOmdex" with "newToDo"
      // console.log(oldToDo, newTodo)
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
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
