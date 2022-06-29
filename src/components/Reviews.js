import React from 'react'

const Reviews = ({courseItems}) => {
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  return (
    <div className="section_center">
      {courseItems.map((courseItem) => {
        const { id, title, price, img, desc } = courseItem;

        return (
          <article key={id} className="card_one">
            <div className="img_cta">
              <img src={img} alt={title} />
            </div>
            <div className="info">
              <header>
                <h4>{title}</h4>
                <h4>₹ {formatToCurrency(price)}</h4>
              </header>
              <p className="desc">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Reviews