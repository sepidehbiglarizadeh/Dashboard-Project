import { useEffect, useState } from "react";
import getAllCategoriesService from "../../services/getAllCategoriesService";
import CategoriesList from "./CategoriesList/CategoriesList";
import Sort from "./Sort/Sort";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import addNewCategoryService from "../../services/addNewCategoryService";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await getAllCategoriesService();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    getAllCategories();
  }, []);

  const addCategoryHandler = async () => {
    const newCategory = {
      id: categories.length + 1,
      title: "دسته بندی جدید",
      products: [],
    };
    try {
      await addNewCategoryService(newCategory);
      const { data } = await getAllCategoriesService();
      setCategories(data);
    } catch (error) {}
  };

  return (
    <section className="md:flex-1">
      <div className="pt-3 text-slate-500 flex items-center justify-between mb-6">
        <h2 className=" text-lg">آثار من:</h2>
        <Sort />
      </div>
      <div>
        {loading ? <p className="text-center">در حال بارگذاری ...</p> : ""}
        {error ? <p className="text-center">{error.message}</p> : ""}
        {categories.map((category) => {
          return <CategoriesList key={category.id} category={category} setCategories={setCategories} />;
        })}
      </div>
      <button
        className="flex items-center gap-x-1 text-blue-600 bg-white rounded-3xl py-3 px-6"
        onClick={addCategoryHandler}
      >
        <FolderPlusIcon className="icon" />
        <span>افزودن دسته جدید</span>
      </button>
    </section>
  );
};

export default Categories;
