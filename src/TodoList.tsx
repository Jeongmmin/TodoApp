import React, { useState } from "react";

import { useForm } from "react-hook-form"

// useFrom (react-hook-form) 이전의 코드
// function TodoList() {

//   const [toDo, setToDo] = useState("");

//   const [toDoError, setToDoError] = useState("")

//   // React.FormEvent<HTMLInputElement>  ->  typescript니까 적는 것

//   // onChange 함수
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };

//   // onSubmit 함수
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if ( toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={toDo} onChange={onChange} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

// useForm 이후 -> onChange, vlaue, useState 모두 대체 이미 onChange도 가지고 있다. watch 우리의 입력 값 감시해 줌

function TodoList() {
  const { register, watch } = useForm(); 
  console.log(watch())
  return (
    <div>
      <form >
        <input {...register("Email")} placeholder="Email" />
        <input {...register("First_name")} placeholder="First Name" />
        <input {...register("Last_name")} placeholder="Last Name" />
        <input {...register("User_name")} placeholder="User Name" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("Password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  )
}


export default TodoList;

// register functino이 모든 것을 다 해 준다.
// onChange 이벤트 핸들러, props, setState 모두 다 필요 없다.
// {name: 'toDo', onChange: ƒ, onBlur: ƒ, ref: ƒ}
// name: "toDo"
// onBlur: async event => {…}
// onChange: async event => {…}
// ref: ref => {…}
// [[Prototype]]: Object

// ... spread 복사 (es6)