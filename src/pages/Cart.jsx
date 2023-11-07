import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="container flex flex-row  w-11/12 mx-auto mt-3">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="w-[40%]">

        <div>
          <div className="text-xl font-bold text-green-600 my-2">Your Cart</div>
          <div className="text-3xl my-2">Summary</div>
          <p className="font-bold my-2">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="font-bold my-2">Total Amount: ${totalAmount}</p>
          <button className="bg-green-600 rounded-lg w-full py-3 text-white">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <h1 className="font-bold text-3xl">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 text-white border rounded-lg text-2xl p-3 mt-3">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
