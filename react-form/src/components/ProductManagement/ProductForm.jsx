import React from "react";

const ProductForm = ({ handleAddProduct }) => {
  const productHandleSubmit = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    // console.log(productName, price);

    const newProduct = {
      productName,
      price,
    };
    // console.log(newProduct);
    handleAddProduct(newProduct);
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={productHandleSubmit}>
        <input type="text" name="productName" placeholder="Product Name" />
        <br />
        <input type="number" name="price" placeholder="Price" />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
