import React from 'react';
import { useReducer } from 'react';

export default function App() {
  const itemsInCart = [
    {
      id: 1,
      name: 'kala chasma',
      price: 1000,
    },
    {
      id: 2,
      name: 'laal chhadi',
      price: 500,
    },
    {
      id: 3,
      name: 'jalebi',
      price: 50,
    },
    {
      id: 4,
      name: 'japani joota',
      price: 10000,
    },
  ];

  /********************************************************************
   * @param {Obj} state - State
   * @param {obj} action - Action object
   *********************************************************************/
  function cartReducer(state, action) {
    // state logic inside it

    // if action has a type of add to cart, increase quantity by 1
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, quantity: state.quantity + 1 };
    }
  }

  // Initialise state
  const [state, dispatch] = useReducer(cartReducer, { quantity: 4 });

  /********************************************************************
   * Handles dispatch actions
   * @param {Integer} quantity - quantity of items in cart
   * @param {obj} action - Action object
   *********************************************************************/
  function addToCart() {
    dispatch({ type: 'ADD_TO_CART' });
  }

  // Return
  return (
    <div>
      <h1>Cartoos</h1>
      <span>Total items : {state.quantity}</span>

      {itemsInCart.map((item) => {
        return (
          <div>
            {item.name} - {item.price}
            <button onClick={addToCart}>add</button>
          </div>
        );
      })}
    </div>
  );
}
