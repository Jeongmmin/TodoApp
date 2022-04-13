import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from 'styled-components';
import { categoryState, toDoState } from "../atoms";
import { AddBtn, CategoryInput, FormBox } from "./CustomCategory";

const TodoInput = styled(CategoryInput)`
  text-transform: none;
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const handelValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <FormBox onSubmit={handleSubmit(handelValid)} autoComplete="off">
      <TodoInput
        {...register("toDo", {
          required: "Please write a to do",
        })}
        placeholder="WRITE A TODO"
      />
      <AddBtn>+</AddBtn>
    </FormBox>
  );
}

export default CreateToDo;
