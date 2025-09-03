import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title';
import ProductItem from './ProductItem';


function BestSeller() {
  const [bestSell, setBestSeller] = useState([]);
  const { products } = useContext(ShopContext);


  useEffect(() => {
    let bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
    console.log(bestSell);
  }, [])

  return (
    <>
      <div className='my-10'>
        <div className='text-center text-3xl py-8'>
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum numquam hic reprehenderit?</p>
        </div>
        {/*display best seller products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-6'>
          {
            bestSell.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default BestSeller