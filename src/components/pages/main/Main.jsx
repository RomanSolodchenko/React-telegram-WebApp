import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div>
      <div class="coffee__wrapper">
        <div class="coffee__item">
          <div class="item__title">Эспрессо</div>
          <img
            src="images/coffee-glass.png"
            alt="espresso"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>
        <div class="coffee__item">
          <div className="item-box">
            <div class="item__title">Американо</div>
            <img
              src="images/coffee-glass.png"
              alt="americano"
              className="item__img"
            />
            <button className="button__pay">Купить</button>
          </div>
        </div>
        <div class="coffee__item">
          <div class="item__title">Капучино</div>
          <img
            src="images/coffee-glass.png"
            alt="cappuccino"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>
        <div class="coffee__item">
          <div class="item__title">Латте</div>
          <img
            src="images/coffee-glass.png"
            alt="latte"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>

        <div class="coffee__item">
          <div class="item__title">Раф</div>
          <img
            src="images/coffee-glass.png"
            alt="latte"
            className="item__img"
          />
          <button className="button__pay">Купить</button>
        </div>

        <div class="coffee__item">
          <div class="item__title">Мокко</div>
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
