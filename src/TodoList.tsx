import React, { useState } from "react";

function TodoList() {

  const [toDo, setToDo] = useState("");

  // React.FormEvent<HTMLInputElement>  ->  typescript니까 적는 것

  // onChange 함수
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };

  // onSubmit 함수
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;

// input을 state로 관리하고, onChange 이벤트로 업데이트 하고 있음
// 만약 input이 여러개라면 함수도 여러개 만들어야 한다 => 불편함, not good
// 이걸 한 줄로 할 수 있는 것을 다음 강의에 알려줄 것이다.
