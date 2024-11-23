import React from "react";
import "./Category.css";

const Category = () => {
  const images = [
    require("../../assets/images/business.png"),
    require("../../assets/images/Category.png"),
    require("../../assets/images/design.png"),
    require("../../assets/images/finance.png"),
    require("../../assets/images/health.png"),
    require("../../assets/images/label.png"),
    require("../../assets/images/lifestyle.png"),
    require("../../assets/images/marketing.png"),
    require("../../assets/images/music.png"),
    require("../../assets/images/design.png"),

    require("../../assets/images/office.png"),
    require("../../assets/images/photography.png"),
  ];

  const rows = [];
  for (let i = 0; i < images.length; i += 4) {
    rows.push(images.slice(i, i + 4));
  }

  return (
    <section className="category-section">
      <h3>Browse Top Category</h3>
      <div className="category-grid">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="category-row">
            {row.map((image, index) => (
              <div key={index} className="category-item">
                <img src={image} alt={`Category ${rowIndex * 4 + index + 1}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
