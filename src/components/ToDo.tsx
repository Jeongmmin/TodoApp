import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from 'styled-components';
import { Categories, IToDo, toDoState } from "../atoms";
import { AddBtn } from './CustomCategory';

const ToDoList = styled.li`
  list-style: none;
  padding: 10px 50px;
  margin: 10px;
  /* display: flex; */
  /* justify-content:space-between; */

`;

const CategoryBtn = styled(AddBtn)`
  padding: 10px;
  margin: 5px;
`;

const DelBtn = styled(AddBtn)`
  padding: 10px 20px;
`;




function ToDo({ text, category, id }: IToDo) {
  // toDo state를 수정하기 위함
  const setToDos = useSetRecoilState(toDoState);
  // 카테고리
  const CustomCategories = useRecoilValue(Categories);

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
    });
  };
  return (
    <ToDoList>
      <span>{text}</span>
      {/* 카테고리가 "값" 이 아닐 때만 값을 보여준다. */}
      {CustomCategories.map(
        (inputValue) =>
          category !== inputValue && (
            <CategoryBtn key={inputValue} name={inputValue} onClick={onClick}>
              {inputValue}
            </CategoryBtn>
          )
      )}
      <DelBtn onClick={handleRomoveToDo}>❌</DelBtn>
    </ToDoList>
  );
}

export default ToDo;
