import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
export default function Home() {
  const products = getProducts();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10 text-gray-600">
        Welcome To ShopHub
      </h1>
      <p className="text-center text-gray-500 mt-2">Lorem ipsum dolor sit.</p>

      <div className="px-5 md:px-0 md:w-3xl  lg:w-5xl m-auto">
        <h2 className="text-2xl font-bold text-start mt-10 ml-1 text-gray-600">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {products.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
