import { useRecoilState, useRecoilValue } from "recoil";
import {Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import CustomCategory from './CustomCategory';
import ToDo from "./ToDo";

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
    <div>
      <h1>To Dos</h1>
      <hr />
      {/* <input type="text" /><input type="text" placeholder="
      categories" /> */}
      {/* <select value={category} onInput={onInput}>
        <option value={"TO_DO"}>To do</option>
        <option value={"DOING"}>Doing</option>
        <option value={"DONE"}>Done</option>
      </select> */}
      <CustomCategory />
      <select value ={category} onInput={onInput}>
        {CustomCategories.map((userCategory) => (
          <option key={userCategory} value={userCategory}>{userCategory}</option>
        ))}
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
    </div>
  );
}

export default TodoList;
