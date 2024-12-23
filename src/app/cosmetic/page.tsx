import React from 'react'


const Cosmetic = () => {
const productData = [
  { id:1 , name: 'Primer', price:'1500', description:'best primer and super-thin , silky and invisible balm', image:'/primer.jpg'},
  { id:2 , name: 'Concealer', price:'1200', description:'best concealer with best result', image:'/concealer 2.jpg'},
  { id:3 , name: 'Eyeshades kit', price:'1200', description:'best color shades for best look', image:'/eye shadows.jpg'},
  { id:4 , name: 'Lipstick', price:'300', description:'creamy texture or a weightless matte finish', image:'/lipsticks.jpg'},
  { id:5 , name: 'Face powder', price:'1000', description:'mattify the skin to a certain degree  ', image:'/F P.jpg'},
  { id:6 , name: 'Nail polish', price:'500', description:'best quality , durability and variety of shades', image:'nail paint.jpg'},

];
  return (
    <div>
      <div className='cosmetic grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
      {productData.map((product) => (
        <div key = {product.id} className="product-card bg-white p-5 rounded.md shadow.md text-center">
          <img src={product.image} alt={product.name}className='w-full rounded.md transition transform duration-300 transform hover:scale-110' />
          <h3 className='mt-4 text-2xl font-bold'>{product.name}</h3>
          <p className='text-gray-500'>{product.description}</p>
          <div className='price text blue-500 text-xl font-semibold mt-2'>${product.price}</div>
          <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded.md'> Add to Cart </button>
        </div>  

      ))}
      </div>
    </div>
  )
}

export default Cosmetic;
