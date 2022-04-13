import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories } from "../atoms";

export const FormBox = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const CategoryInput = styled.input`
  font-size: 14px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  margin: 10px 0px;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  text-transform: uppercase;
  grid-area: 1 / 1 / 2 / 4;
  :focus {
    outline: none;
    background: rgba(192, 227, 255, 0.244);
  }
`;

export const AddBtn = styled.button`
  margin: 10px 0 10px 10px;
  padding: 0 15px;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #b3a9c3;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  grid-area: 1 / 4 / 2 / 5;
  :hover {
    background-color: #dfd0f6;
    box-shadow: 0px 15px 20px rgba(83, 46, 229, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  :active {
    transform: translateY(-1px);
  }
`;

interface ICategoryForm {
  category: string;
}

function CustomCategory() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();

  const setCategory = useSetRecoilState(Categories);

  const handelValid = ({ category }: ICategoryForm) => {
    setCategory((oldCategories) => [...oldCategories, category]);
    setValue("category", "");
  };

  return (
    <FormBox onSubmit={handleSubmit(handelValid)} autoComplete="off">
      <CategoryInput
        {...register("category", {
          required: "Please write a custom category",
        })}
        placeholder="Write a custom category"
      />
      <AddBtn>+</AddBtn>
    </FormBox>
  );
}

export default CustomCategory;
