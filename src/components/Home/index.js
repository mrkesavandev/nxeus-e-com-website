import { useState, useEffect } from "react";
import ProductItem from "../ProductItem";
import "./index.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("smartphones");

  const tabContainer = () => (
    <>
      <div className="tab-container">
        <div className="tab-responsive-container">
          <select onChange={onSelectChange} value={activeTab}>
           
            <option value="furniture">Furniture</option>
            <option value="mens-shirts">Mens-Shirt</option>
            <option value="womens-dresses">Womens-Dresses</option>
            <option value="smartphones">Smartphone</option>
            <option value="laptops">Laptops</option>
            <option value="motorcycle">Motorcycle</option>
            
          </select>
          <button
            onClick={onclickBtn}
            value="smartphones"
            className={activeTab === "smartphones" ? "active" : ""}
          >
            Smartphone
          </button>
          <button
            onClick={onclickBtn}
            value="laptops"
            className={activeTab === "laptops" ? "active" : ""}
          >
            Laptops
          </button>
          <button
            onClick={onclickBtn}
            value="motorcycle"
            className={activeTab === "motorcycle" ? "active" : ""}
          >
            Motorcycle
          </button>
          <button
            onClick={onclickBtn}
            value="furniture"
            className={activeTab === "furniture" ? "active" : ""}
          >
            Furniture
          </button>
          <button
            onClick={onclickBtn}
            value="mens-shirts"
            className={activeTab === "mens-shirts" ? "active" : ""}
          >
            Mens-Shirt
          </button>
          <button
            onClick={onclickBtn}
            value="womens-dresses"
            className={activeTab === "womens-dresses" ? "active" : ""}
          >
            Womens-Dresses
          </button>
          <button
            onClick={onclickBtn}
            value="sunglasses"
            className={activeTab === "sunglasses" ? "active" : ""}
          >
            Sunglasses
          </button>
        </div>
      </div>
    </>
  );

  const loadProduct = () => {
    return (
      <div className="product-container">
        <div className="product-responsive-container">
          {products.map((eachProduct) => (
            <ProductItem eachProduct={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      </div>
    );
  };

  const getProducts = async (activeValue) => {
    try {
      const url = `https://dummyjson.com/products/category/${activeValue}`;
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.products);
      setProducts(data.products);
      setLoading(false);
    } catch (e) {
      console.log(`Fetching Error: ${e.message}`);
    }
  };

  const onSelectChange = (e) => {
    let activeValue = e.target.value;
    setLoading(true);
    setActiveTab(activeValue);
    getProducts(activeValue);
  };

  const onclickBtn = (e) => {
    let activeValue = e.target.value;
    setLoading(true);
    setActiveTab(activeValue);
    getProducts(activeValue);
  };

  useEffect(() => {
    getProducts(activeTab);
  }, [activeTab]);

  return (
    <div className="home-container">
      <div className="responsive-home-container">
        {tabContainer()}
        {loading ? (
          <div className="loading-container">
            <div className="loading-animation"></div>
          </div>
        ) : (
          loadProduct()
        )}
      </div>
    </div>
  );
}

export default Home;
