import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// Categories Enum
export enum Categories {
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
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

