import React, { useState, useMemo } from "react";

function RenderList({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("electronics");

  const filteredProducts = useMemo(() => {
    console.log("✅ useMemo: Filtering products...");
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="footwear">Footwear</option>
      </select>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
} 



export default RenderList;