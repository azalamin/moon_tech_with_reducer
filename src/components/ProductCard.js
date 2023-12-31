import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import { actionTypes } from '../actionTypes/actionTypes';
import { useProducts } from '../context/ProductProvider';

const ProductCard = ({ product }) => {
  const {state, dispatch} = useProducts();

  const path = useLocation()
  const { pathname } = path;

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {
          pathname.includes('/cart') ? <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold' onClick={() => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product._id })}>
            Remove
          </button> : <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold' onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: product })}>
            Add to cart
          </button>
        }
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
          onClick={() => dispatch({type: actionTypes.WISHLIST, payload: product})}
        >
          <BiListPlus className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
