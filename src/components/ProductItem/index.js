import "./index.css";

const ProductItem = ({ eachProduct }) => {
  const {
    title,
    brand,
    description,
    price,
    images,
    rating,
    discountPercentage,
  } = eachProduct;
  let discount = price / discountPercentage;
  let orginal = Math.ceil(price - discount);
  return (
    <div className="product-item">
      <div className="img-container">
        <img className="img" src={images[0]} alt={title} />
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="product-details">
        <div className="product-responsive-details">
          <div className="brand-rating">
            <p>
              Brand: <span className="brand-rating-span">{brand}</span>
            </p>
            <p>
              Rating: <span className="brand-rating-span">{rating}/5</span>
            </p>
          </div>
          <div className="price-container">
            <p className="price">₹{orginal}</p>
            <p className="mrp-price">MRP.{price} \ -</p>
            <p className="discount">{discountPercentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
