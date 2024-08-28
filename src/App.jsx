/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clicks, addtoCarts, minusFromCarts, deleteFromCarts, totalAmountPrice, clearOrder } from './Redux/actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  const totalOrder = useSelector((state) => state.store.order);
  const sortedStore = useSelector((state) => state.store.sortedStore);
  const openCart = useSelector((state) => state.store.openCart);
  const totalAmount = useSelector((state) => state.store.totalAmount);

  console.log(totalOrder);
  const [searchItem, setSearchItem] = useState('');
  const [searchOrder, setSearchOrder] = useState(sortedStore);

  useEffect(() => {
    const searchOrderItem = sortedStore.filter((items) => items.category.toLowerCase().includes(searchItem.toLowerCase()));
    setSearchOrder(searchOrderItem);
  }, [searchItem]);

  const click = (id) => {
    dispatch(clicks({ id }));
  };

  const addToCart = (id, name, price, amountOrdered) => {
    dispatch(addtoCarts({ id, name, price, amountOrdered }));
    dispatch(totalAmountPrice());
    toast.success(name + ' ' + 'Added To Cart');
    // toast.info('Added To Cart');

    // toast.success('Added To Cart');
  };

  const minusFromCart = (id, name, price, amountOrdered) => {
    dispatch(minusFromCarts({ id, name, price, amountOrdered }));
    dispatch(totalAmountPrice());
    if(amountOrdered !== 0) toast.error(name + ' ' + 'Removed From Cart');
  };

  const deleteItem = (id, name) => {
    dispatch(deleteFromCarts({ id }));
    dispatch(totalAmountPrice());
    toast.error(name + ' ' + 'Deleted From Cart');
  };
  const clearOrderItem = () => {
    dispatch(clearOrder());
    toast.error('Cart Cleared');
  };

  const confirmOrder = () => {
    toast.success('Order Received. Please kindly wait for 12-24 hours. Thank You!');
  }

  return (
    <div className="select-none w-[75%] mx-auto relative my-8 flex bg-blue gap-4 max-xl:w-[82%] max-lg:w-[90%] max-[850px]:flex-col max-md:w-[93%]">

      <div className="w-[69%] max-lg:w-[82%] max-[850px]:w-full max-md:w-full">
        <div className="flex gap-8 mb-7 max-lg:gap-4">
          <h1 className="text-3xl font-bold">Fola Store</h1>
          {/* <input onChange={(e) => setSearchItem(e.target.value)} className="rounded-md bg-transparent border-2 px-1.5 py-0 text-sm w-60 max-md:w-48" placeholder="Electronics, Jewelry, Shoes, Clothes" type="text" /> */}
        </div>

        <div className="flex gap-3 flex-wrap" >
          {sortedStore.map((store, index) =>
          (
            <div key={index} className=" w-64 flex-grow flex-shrink basis-[40%] max-md:basis-[50%] max-md:w-full" >
              <div className={`bg-[url('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg')] relative bg-cover bg-center bg-no-repeat w-full h-52 rounded-lg bg-opacity-30 `}>
                <div className="absolute flex justify-center bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4 ">
                  {!store.clicked ? <p onClick={() => click(store.id, store.clicked, store.title, store.price)} className=" bg-white  w-full text-lg text-blue-600 py-2 px-5 rounded-full text-sm border-2 font-bold border-blue-600">Add to Cart</p> : <div className='cursor-pointer  flex gap-4 items-center bg-white w-full  text-blue-600 py-2 px-5 rounded-full'>
                    <div className="flex items-center rounded-full w-5 h-5 border-2  justify-center">
                      <span className='text-center text-sm font-bold' onClick={() => minusFromCart(store.id, store.title, store.price, store.amountOrdered)}>-</span>
                    </div>
                    <span className="font-bold" >{store.amountOrdered < 0 ? 0 : store.amountOrdered}</span>
                    <div className="flex items-center rounded-full w-5 h-5 border-2  justify-center">
                      <span className='text-center text-sm font-bold' onClick={() => addToCart(store.id, store.title, store.price, store.amountOrdered)} >+</span>
                    </div>
                  </div>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-4 mt-11">
                <small className="opacity-7 text-slate-400 font-bold">Category: {store.category.toUpperCase()}</small>
                <p className="font-bold">{store.title}</p>
                <span className="text-blue-400 opacity-9 text-sm">${store.price}</span>
                <span className="text-slate-400 opacity-85 text-sm">Rating: {store.rating.rate}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openCart && <div style={totalOrder.length <= 0 ? { display: 'none' } : {}} className="shadow-lg bg-black border-2 px-4 py-5 w-[26%] h-min rounded-lg max-xl:w-[35%] max-lg:w-full max-md:px-4 max-md:fixed right-0 left-0 -bottom-[0%] max-md:max-h-[50vh] max-md:overflow-x-scroll">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-3xl text-blue-600 font-bold">Your Cart ({totalOrder.length}) </h1>
          <p className=" w-7 h-7 flex text-white text-2xl justify-center font-bold" onClick={clearOrderItem}  >X</p>
        </div>
        {totalOrder.map((orderList, index) => (
          <div key={index} style={orderList.amountOrdered <= 0 ? { display: 'none' } : {}}>
            <div className='flex justify-between items-center gap-5' >
              <div className="py-4">
                <p className="font-bold text-lg opacity-85 ">{orderList.name}</p>
                <div className="flex text-sm gap-4">
                  <p className="text-blue-600 font-bold">{orderList.amountOrdered < 0 ? 0 : orderList.amountOrdered}x</p>
                  <span className="opacity-50">@{orderList.price}</span>
                  <span className="opacity-50">${orderList.totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="justify-center">
                <p className="border-2 w-7 h-7 flex text-white justify-center rounded-full font-bold" onClick={() => deleteItem(orderList.id, orderList.name)} >X</p>
              </div>
            </div>
            <hr />
          </div>
        ))}

        <div className="py-5">
          <p className="flex justify-between text-slate-500">Order Total   <span className="text-white font-bold">${totalAmount.toLocaleString()}</span></p>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-600 w-full text-md font-bold text-white py-3 px-3 rounded-full" onClick={confirmOrder}>Confirm Order</button>
        </div>
      </div>
      }
      <ToastContainer />
    </div>
  )
}

export default App
