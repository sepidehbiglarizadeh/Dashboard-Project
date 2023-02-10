import Product from "./Product/Product";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const ProductList = ({ category }) => {
  return (
    <div className="md:flex md:gap-x-4 md:flex-wrap">
      {category.products.map((product) => {
        return <Product product={product} />;
      })}
      <div className="flex items-center justify-between md:flex-col md:pt-28">
        <button className="text-blue-600 flex gap-x-1 md:flex-col md:items-center md:pt-1/2">
          <PlusCircleIcon className="icon" />
          <span className="text-xs">افزودن اثر</span>
        </button>
        <button className="text-xs">نمایش بیشتر...</button>
      </div>
    </div>
  );
};

export default ProductList;
