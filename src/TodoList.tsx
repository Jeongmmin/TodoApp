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
  const { register, handleSubmit, formState } = useForm(); 
  // react-hook-form이 모든 validation을 다 마쳤을 때만 호출될 함수
  const onValid = (data: any) => {
    console.log(data);
  }
  console.log(formState.errors)
  return (
    <div>
      <form style={{display: 'flex', flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", {required: true, minLength: 10})} placeholder="Email" />
        <input {...register("First_name", {required: true})} placeholder="First Name" />
        <input {...register("Last_name", {required: true})} placeholder="Last Name" />
        <input {...register("User_name", {required: true})} placeholder="User Name" />
        <input {...register("Password", {required: true, minLength: 5})} placeholder="Password" />
        <input {...register("Password1", {required: "Password is required", minLength: {value :5, message: "Pw too short"}})} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  )
}


export default TodoList;

// onSubmit 대체하기
/**
 * handleSubmit - validation, preventDefault 담당 / 2개의 argument를 받는다(데이터유효할 때, 유효하지 않을 때)
 * () => 함수 호출
 * required 그냥 넣으면 누군가 인터넷 상의 코드를 지우면 정상적으로 동작할 위험이 있다.
 * HTML로 보호받는 것은 좋지만 사용자가 이 기능을 지원하지 않는 브라우저에 읶거나, 지원하지 않는 모바일에서 본다면 보호 받지 못한다.
 * 그래서 JS에서 validation 하는 것이다. 자동으로 에러가 일어난 곳으로 커서를 옮겨준다.(focus)
 *minLength: 10 이렇게만 써줘도 10글자 제한 가능

 에러 받기 - formState  console.log(formState.errors)해보면 에러가 자동으로 컨드롤 되고 있다.
 */
