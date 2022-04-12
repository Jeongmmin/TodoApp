import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface IForm {
  toDo: string;
}

// toDo가 어떻게 생겼는지 알려주는 Interface
interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function TodoList() {
  // // 기존 방법
  // // Atom의 value에 접근하는 방법 => value =[]
  // const value = useRecoilValue(toDoState);

  // // Atom의 value를 변경해야 하는 경우가 있음, modifier 가져오는 방법
  // const modifierFn = useSetRecoilState(toDoState);

  // useRecoilValue, useSetRecoilState를 한 번에 할 수 있다. useState와 닮았다.
  // const [value, modifierFn] = useRecoilState(toDoState)
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handelValid = ({ toDo }: IForm) => {
    // console.log("add todo", toDo);
    // 폼이 제출되고 모두 에러가 없다면 STATE를 바꾸고 싶다.
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handelValid)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      {/* to do list */}
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

// 폼이 제출되고 모두 에러가 없다면 STATE를 바꾸고 싶다.
// oldToDo의 요소들이 들어있는 배열을 반환하고 싶다면
/**
 * oldToDos => [oldToDo] : 배열 안에 배열을 담아서 리턴하게 되는 것
 *
 * oldToDos => [...oldToDo] : 배열 안의 요소를 반환
 *
 * 새로운 toDo도 넣어주어야 한다.
 * 
 * 다음 강의 : 코드를 분리해 볼 것이다. 
 */
