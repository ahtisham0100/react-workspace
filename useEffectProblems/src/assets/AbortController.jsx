import { useEffect, useState } from "react";

function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const controller = new AbortController;

    async function fetchData() {
      try {
        const response = await fetch("/products.json", {
          signal: controller.signal,
        });
        const data = await response.json();
        const datafound = data.find((item) => item.id === id);

        if (datafound) {
          setProduct(datafound);
          console.log(datafound)
        } else {
          setProduct("not found");
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.error("Fetch error:", error);
        }
      }
    }

    fetchData();
  }, [id]);


  return (
    <div className="product">
      {product === null && <p>Loading...</p>}
      {product === "not found" && <p>Product not found</p>}
      {typeof product === "object" && product.name && (
        <>
          {/* <h2>{product.name}</h2> */}
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </>
      )}
    </div>
  );
}

export { ProductDetails };
