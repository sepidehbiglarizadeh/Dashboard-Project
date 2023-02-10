const Product = ({ product }) => {
  return (
    <div
      key={product.id}
      className="w-full lg:w-[190px] 2xl:w-[230px] rounded-3xl overflow-hidden shadow-md mb-4 lg:mb-0"
    >
      <figure className="">
        <img src={product.image} alt={product.title} />
      </figure>
      <p className="my-5 mx-4">{product.title}</p>
    </div>
  );
};

export default Product;
