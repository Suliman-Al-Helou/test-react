export default function productCard({ product }) {
  return (
    <div className="rounded-[7px] overflow-hidden bg-white  " >
      <img src={product.image} />
      <div className="p-5">
        <h3 className=" font-bold">{product.title}</h3>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="text-blue-700 font-bold py-2">{product.price}$</p>
        <div className="flex gap-2">
          <button className="bg-blue-700 hover:bg-blue-800  rounded-md p-2 text-white  transition-colors duration-300">
            view details
          </button>
          <button className="bg-gray-500 hover:bg-blue-800 rounded-md p-2 text-white  transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
