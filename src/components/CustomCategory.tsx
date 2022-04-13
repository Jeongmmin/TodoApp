import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories } from "../atoms";

export const FormBox = styled.form`
  margin: 0 auto;
`;
export const CategoryInput = styled.input`
  font-size: 16px;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 30px;
  :focus {
    outline: none;
    background: rgba(192, 227, 255, 0.244);
    
  }
`;

export const AddBtn = styled.button`
  padding: 1em 2em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #70d9fa;
    box-shadow: 0px 15px 20px rgba(46, 134, 229, 0.4);
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
    <FormBox onSubmit={handleSubmit(handelValid)}>
      <CategoryInput
        {...register("category", {
          required: "Please write a custom category",
        })}
        placeholder="Write a custom category"
      />
      <AddBtn>Add</AddBtn>
    </FormBox>
  );
}

export default CustomCategory;
