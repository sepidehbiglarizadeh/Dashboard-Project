import { useEffect, useState } from "react";
import getAllCategoriesService from "../../services/getAllCategoriesService";
import CategoriesList from "./CategoriesList/CategoriesList";
import Sort from "./Sort/Sort";
import { FolderPlusIcon } from "@heroicons/react/24/outline";

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
          return <CategoriesList key={category.id} category={category} />;
        })}
      </div>
      <button className="flex items-center gap-x-1 text-blue-600 bg-white rounded-3xl py-3 px-6">
        <FolderPlusIcon className="icon" />
        <span>افزودن دسته جدید</span>
      </button>
    </section>
  );
};

export default Categories;
