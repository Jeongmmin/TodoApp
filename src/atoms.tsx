import { atom } from 'recoil';

// 공통적으로 많이 쓰이니까 atom으로 분리
export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}


export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});