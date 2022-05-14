import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <div className="coffee__wrapper">
        <div className="coffee__item">
          <div className="item__title">Эспрессо</div>
          <img
            src="images/coffee-glass.png"
            alt="espresso"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>
        <div className="coffee__item">
          <div className="item-box">
            <div className="item__title">Американо</div>
            <img
              src="images/coffee-glass.png"
              alt="americano"
              className="item__img"
            />
            <button className="button__pay">Купить</button>
          </div>
        </div>
        <div className="coffee__item">
          <div className="item__title">Капучино</div>
          <img
            src="images/coffee-glass.png"
            alt="cappuccino"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>
        <div className="coffee__item">
          <div className="item__title">Латте</div>
          <img
            src="images/coffee-glass.png"
            alt="latte"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>

        <div className="coffee__item">
          <div className="item__title">Раф</div>
          <img
            src="images/coffee-glass.png"
            alt="latte"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>

        <div className="coffee__item">
          <div className="item__title">Мокко</div>
          <img
            src="images/coffee-glass.png"
            alt="latte"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
