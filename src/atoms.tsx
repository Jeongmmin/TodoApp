import { atom, selector } from "recoil";

// type : 복붙을 하지 않게 해주는 문법 -> enum으로 고쳐보자(코드 전체에서 각각 사용할 수 있도록 수정)
// enum = enumerable (셀 수 있는, 열거)
// type categories = "TO_DO" | "DOING" | "DONE"
export enum Categories {
  // "TO_DO",
  // "DOING",
  // "DONE",
  // 원한다면 type을 바꿀 수 있다.
  "TO_DO" = "TO_DO",
  "DOING" ="DOING",
  "DONE" = "DONE",
}

// 공통적으로 많이 쓰이니까 atom으로 분리
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

// 티입스크립트에게 카테고리가 3가지 유형 중 하나라고 설명
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
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
