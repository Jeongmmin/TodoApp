import React, { useState } from "react";

import { useForm } from "react-hook-form";

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

interface IForm {
  email: string;
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
  password1: string;
  // 만약 필수인 항목이 아니라면 ?를 붙여주여야 한다.
  // ex. lastName?: string
  extraError?: string;
}

function TodoList() {
  // error 분해
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError = 특정 에러를 발생시키게 해준다.
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // react-hook-form이 모든 validation을 다 마쳤을 때만 호출될 함수
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", {message:"Server Offline"})  //전체 form에 해당되는 내용
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        {/* 사용자에게 Error 보여주기 */}
        <input
          {...register("first_name", {
            required: "write here",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "No nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.first_name?.message}</span>
        <input
          {...register("last_name", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.last_name?.message}</span>
        <input
          {...register("user_name", { required: "write here" })}
          placeholder="User Name"
        />
        <span>{errors?.user_name?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password1 is too short" },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default TodoList;

// 추가적 조건 검사 하는 방법 (내가 만든 규칙 적용)
/**
 * 1. 어떻게 에러는 발생시키는지 확인
 *  - pw !== pw1 일 때
 *
 * setError : 발생하는 문제에 따라 추가적으로 에러를 설정할 수 있게 도와준다. / form에ㅐ서 내가 고른 input 항목에 강제로 focus시킬 수 있다. =>  {shouldFocus: true} 사용
 * 📍 물음표를 붙이면, 그 항목이 undefined면 그 뒤를 실행하지 않는다!!!
 *
 * react-hook-form에서 문자열을 리턴 === 에러 메서지를 리턴하는 것
 * validate: (value) => !value.includes("nico"), => nico가 아니면 true (앞에 ! 있음)
 * validate: (value) => value.includes("nico") ? "No nicos allowed" : true, (nico면 에러메시지, 아니면 true)
 *
 * validate = 하나의 함수 또는 여러 함수가 있는 객체가 될 수 있음 => input에 여러 개의 검사가 필요할 수도 있기 떄문
 *
 * validate 함수를 async 비동기로 만들어서 서버에다가 확인하고 응답을 받을 수도 있다.
 * 여기까지가 전체적인 react-hook-form의 개요
 */
