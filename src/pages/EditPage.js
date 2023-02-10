import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getOneCategoryService from "../services/getOneCategoryService";
import updateCategoryService from "../services/updateCategoryService";

const EditPage = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({});
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getOneCategory = async () => {
      try {
        const { data } = await getOneCategoryService(parseInt(id));
        setCategory(data);
        setInputValue(data.title);
      } catch (error) {}
    };
    getOneCategory();
  }, []);

  const updateHandler = async () => {
    const updatedCategory = { ...category, title: inputValue };
    try {
      await updateCategoryService(id, updatedCategory);
      setInputValue("");
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="bg-white mt-4 mr-6 w-full max-w-sm h-56 p-6">
      <input
        value={inputValue}
        className="border p-2 shadow-sm rounded-md w-full mb-4"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex gap-x-2">
        <button
          className="bg-blue-600 text-white w-1/2 rounded-md py-2"
          onClick={updateHandler}
        >
          بروزرسانی
        </button>
        <button
          className="bg-blue-600 text-white w-1/2 rounded-md py-2"
          onClick={() => navigate("/")}
        >
          لغو
        </button>
      </div>
    </div>
  );
};

export default EditPage;
