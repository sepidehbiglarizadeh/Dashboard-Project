import Product from "./Product/Product";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const ProductList = ({ category }) => {
  return (
    <div className="lg:flex lg:gap-x-4 lg:gap-y-4 flex-wrap">
      {category.products.map((product) => {
        return <Product product={product} />;
      })}
      <div className="flex items-center justify-end md:flex-col">
        <button className="text-blue-600 flex gap-x-1 md:flex-col md:items-center md:pb-[50px]">
          <PlusCircleIcon className="icon" />
          <span className="text-xs">افزودن اثر</span>
        </button>
        <button className="text-xs">نمایش بیشتر...</button>
      </div>
    </div>
  );
};

export default ProductList;
