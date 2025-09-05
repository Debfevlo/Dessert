import appData from '../data.json'

const Modal = ({index}) => {
    const item = appData[index]
    
    
  return (
    <dialog  className='bg-Rose-900 text-white w-64 h-64  m-auto p-4 ' open>
        <p className='text-base text-Rose-300 font-bold mb-2 '>This is the details about the product you click on</p>
        <p className='mb-2'>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.price}</p>
        <form action="dialog">
            <button className='px-8 py-2 border rounded-full bg-Rose-500'>Close</button>
        </form>
    </dialog>
  )
}
export default Modal