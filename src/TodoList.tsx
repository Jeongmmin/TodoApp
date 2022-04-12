import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

// useFrom (react-hook-form) 이전의 코드
function TodoList() {

  const {
    register, handleSubmit, setValue
  } = useForm<IForm>()

  const handelValid = (data:IForm) => {
    console.log('add todo', data.toDo)
    setValue("toDo", "")
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handelValid)}>
        <input {...register("toDo", {
          required: "Please write a to do"
        })} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}


export default TodoList;

// handleSubmit 함수를 사용할 때는 첫 번째 매개변수로 데이터가 유효할 때 호출되는 다른 함수를 받는 것
// 원한다면 데이터가 유효하지 않을 때 호출 될 다른 함수를 2번째 매개변수로 넣을 수도 있다.
/**
 * - 입력값이 submit되고 , 값이 검사를 통과하면 다시 input을 비우고 싶음
 *  setValue 사용
 * 
 * 
 * 
 */
