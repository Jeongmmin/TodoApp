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
}

function TodoList() {
  // error 분해
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: { 
      email:"@naver.com"
     }
  });
  // react-hook-form이 모든 validation을 다 마쳤을 때만 호출될 함수
  const onValid = (data: any) => {
    console.log(data);
  };
  // console.log(errors);
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
          {...register("first_name", { required: "write here" })}
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
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "Pw too short" },
          })}
          placeholder="password1"
        />
        <span>{errors?.first_name?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;

// Validation 방법 + a => '정규표현식' https://www.regexpal.com/
/**
 * /^[A-Za-z0-9._%+-]+@naver.com$/ = 앞자리에 대,소문자 a -z, 숫자 0-9까지를 모두 포함하고 뒷자리는 naver.com과 일치하겠다는 의미
 * 옵션 - 2가지, 바로 값 보내기, 다른 하나는 객체에 넣어서 보내기
 *
 * 에러를 사용자에게 보여주자.
 *
 * required를 체크하려면 error 나오는 곳 말고, required에 하면 된다. 또 타입을 체크할 필요는 없다.
 *
 * 에러 : 처음에는 안 보이고 Add눌러서 제출해야만 보인다.
 *
 * 에러난 항목의 테두리를 빨갛게 하는가 하는 방법이 있다. (도전?)
 *
 * 타입스크립트에게 나의 form의 모양을 어떻게 알려줘야 하는가? -> interface사용
 */
