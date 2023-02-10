import ProductList from "../ProductList/ProductList";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CategoriesList = ({ category }) => {
  return (
    <section
      key={category.id}
      className=" rounded-3xl pt-8 px-6 pb-6 mb-6  w-full xl:w-max bg-white "
    >
      <div className="flex items-center gap-x-2 mb-6">
        <h2 className="text-blue-600 text-lg">{category.title}</h2>
        <Link to={`/edit/${category.id}`}  >
          <PencilSquareIcon className="icon text-slate-400 cursor-pointer" />
        </Link>
        <button>
          <TrashIcon className="icon text-rose-600" />
        </button>
      </div>
      <ProductList category={category} />
    </section>
  );
};

export default CategoriesList;
