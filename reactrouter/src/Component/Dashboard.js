import React, { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setData(products);
      console.log(products);
    }
    fetchData();
  }, []);

  function AddToCart(item) {
    alert("Item Added to Cart: " + item.title);
  }

  return (
    <div>
      {data.length === 0 ? (
        <h1>Data is not available</h1>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            style={{ border: "2px solid green", margin: "20px", padding: "10px" }}
          >
            <img src={item.image} alt="product" height={200} width={200} />
            <h1>{item.title}</h1>
            <h2>$ {item.price}</h2>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>

            <button onClick={() => AddToCart(item)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
