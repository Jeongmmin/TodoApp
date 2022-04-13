import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Categories } from "../atoms";

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
    <form onSubmit={handleSubmit(handelValid)}>
      <input
        {...register("category", {
          required: "Please write a custom category",
        })}
        placeholder="Write a category"
      />
      <button>Add</button>
    </form>
  );
}

export default CustomCategory;
