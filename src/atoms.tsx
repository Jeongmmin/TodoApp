import { atom, selector } from "recoil";

// 공통적으로 많이 쓰이니까 atom으로 분리
export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // if(category === "TO_DO") return toDos.filter((toDo) => toDo.category === "TO_DO");
    // if(category === "DOING") return toDos.filter((toDo) => toDo.category === "DOING")
    // if(category === "DONE") return toDos.filter((toDo) => toDo.category === "DONE");
    return toDos.filter((toDo) => toDo.category === category);
  },
});

// 컴포넌트에서 할 수 있지만 selector가 있으면 체계적으로 데이터를 관리할 수 있다.
/**
 * 한 번에 한 배열만 보여줄 것이다.
 * 내가 보고있는 카테고리에 todo 추가할 수 있도록 만들 것이다.
 *
 *
 */
