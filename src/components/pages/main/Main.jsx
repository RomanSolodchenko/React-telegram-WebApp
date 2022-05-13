import React from 'react';
import "./Main.css"
const Main = () => {
    return (
        <div>
             <div class="coffee__wrapper">
        <div class="coffee__item">
            <div class="item__title">Эспрессо</div>
            <img src="images/coffee-glass.png" alt="espresso" className='item__img'/>
            <div class="item__volume">60 мл</div>
            <div class="item__price">69р</div>
        </div>
        <div class="coffee__item">
            <div class="item__title">Американо</div>
            <img src="images/coffee-glass.png" alt="americano" className='item__img'/>
            <div class="item__volume">170/250 мл</div>
            <div class="item__price">79р</div>
        </div>
        <div class="coffee__item">
            <div class="item__title">Капучино</div>
            <img src="images/coffee-glass.png" alt="cappuccino" className='item__img'/>
            <div class="item__volume">250/340/450 мл</div>
            <div class="item__price">139/169/189р</div>
        </div>
        <div class="coffee__item">
            <div class="item__title">Латте</div>
            <img src="images/coffee-glass.png" alt="latte" className='item__img'/>
            <div class="item__volume">250/340/450мл</div>
            <div class="item__price">139/169/189р</div>
        </div>

        <div class="coffee__item">
            <div class="item__title">Латте</div>
            <img src="images/coffee-glass.png" alt="latte" className='item__img'/>
            <div class="item__volume">250/340/450мл</div>
            <div class="item__price">139/169/189р</div>
        </div>

        <div class="coffee__item">
            <div class="item__title">Латте</div>
            <img src="images/coffee-glass.png" alt="latte" className='item__img'/>
            <div class="item__volume">250/340/450мл</div>
            <div class="item__price">139/169/189р</div>
        </div>
        
    </div>
        </div>
    );
}

export default Main;
