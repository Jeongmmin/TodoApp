import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from 'styled-components';
import { Categories, IToDo, toDoState } from "../atoms";
import { AddBtn } from './CustomCategory';

const ToDoList = styled.li`
  list-style: none;
  margin: 10px 0;
  display: flex;
  justify-content:space-between;
  
  span {
    padding: 10px;
    margin: 0;
    text-align: center;
    align-items:center;
    border: none;
    width: 450px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
  }

`;

const CategoryBtn = styled(AddBtn)`
  padding: 10px;
  margin: 0;
  border-radius: 30px;
  font-size: 13px;
  :hover {
    background-color: #bdd198;
    box-shadow: 0px 15px 20px rgba(158, 182, 110, 0.4);
    }
`;

const DelBtn = styled(AddBtn)`
  padding: 10px 20px;
  color: #fa7070;
  margin: 0;
  border-radius: 30px;
  font-size: 14px;
  :hover {
    background-color: #fa7070;
    box-shadow: 0px 15px 20px rgba(248, 149, 149, 0.4);
    color: whitesmoke;
    }
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
      <DelBtn onClick={handleRomoveToDo}>X</DelBtn>
    </ToDoList>
  );
}

export default ToDo;
