import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import {Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import CustomCategory from './CustomCategory';
import ToDo from "./ToDo";

const Container = styled.div`
margin: 0 auto;
display:flex;
flex-direction: column;
justify-content: center;
max-width: 480px;
`;

const Title = styled.h1`
  font-size: 32px;
  padding: 20px;
`;

const SelectorOuter = styled.div`
padding: 0 20px;
  margin: 10px;
`;

function TodoList() {
  // 배열이 return될때
  const toDos = useRecoilValue(toDoSelector);
  const CustomCategories = useRecoilValue(Categories);
  const [category, setCategory] = useRecoilState(categoryState);
  // SELECT의 변경을 감지하는 함수
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(toDos)
  return (
    <Container>
      <Title>📚To Do List</Title>
      <hr />
      <CustomCategory />
      <SelectorOuter>
      <select value ={category} onInput={onInput}>
        {CustomCategories.map((userCategory) => (
          <option key={userCategory} value={userCategory}>{userCategory}</option>
        ))}
      </select>
      </SelectorOuter>
      <CreateToDo />
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
    </Container>
  );
}

export default TodoList;
