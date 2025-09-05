
import appData from '../data.json'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from './Modal';
import { useState } from 'react';

const List = () => {
  const [clickOpen, setClickOpen] = useState(false)
  const [getIndex, setGetIndex] = useState(null)

  const handleClick = (clickIndex)=>{
    setClickOpen(!clickOpen)
    setGetIndex(clickIndex)

    }
 
  return (
    <>
    
    <div className=' m-auto p-8 flex bg-Rose-100'>
      {
            clickOpen && getIndex ? <Modal index={getIndex} modal={clickOpen}/> : undefined
          }
      <h2 className='text-Rose-900 font-Bold text-center mb-2'>Desserts</h2>

      <div className='flex flex-wrap gap-8 justify-center'>
        {appData.map((item, index)=>(
        <div key={index} className='w-64'>
          <img src={item.image.desktop} alt="" className='w-full rounded-2xl object-contain' onClick={()=>handleClick(index)}/>
            
            <div className='flex gap-4 border py-2 px-4 rounded-full items-center justify-center'>
              <AiOutlineShoppingCart />
              <button>Add to cart</button>
            </div>
            <div>
              <p className='font-regular text-Rose-300'>{item.name}</p>
              <p className='font-Bold text-Rose-500'>{item.category}</p>
              <p className='text-Red'>{item.price}</p>
            </div>
        </div>
      ))}
      </div>
      <div className='bg-white h-72 w-[800px] text-center space-y-8 p-4 rounded-2xl' >
        <p>Your Cart (0)</p>
        <img src='/assets/images/illustration-empty-cart.svg' alt="" className='m-auto'/>
        <p>Your added items will appear here </p>
        
      </div>
      
    </div>

      
    </>
  )
}

export default List