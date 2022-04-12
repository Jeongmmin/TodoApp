import { atom, selector } from "recoil";

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

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});

// derived State : state를 입력 받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값을 말함

/**
 * 현재 : 모든 상태의 todo들이 todos에 들어있다.
 *
 * 카테고리 별로 분류하고 싶다. -> selector사용
 * 하지만 atom을 3개로 나누고 싶지는 않음, selector function을 사용할 것 (atom의 ouput을 변형시킬 것이다.)
 *
 * selector : atom을 가져다가 output을 변형할 수 있다.
 * get function이 있어야 atom을 받을 수 있다.
 *
 * 구현하고 싶은것 -> 배열을 담은 배열을 return하는 것  -> JS 의 filter function이용 (배열에서 조건에 맞지 않는 원소들을 제거한 배열을 return한다.)
 * 
 * 결과적으로는 카테고리 별로 랜더링 하고 싶음
 */
