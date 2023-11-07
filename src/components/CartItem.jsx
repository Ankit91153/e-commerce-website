
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div class="container w-11/12 mx-auto">

      <div className="flex flex-row gap-4 w-[80%] border p-4 my-4">

        <div>
          <img src={item.image} className="w-[900px] h-[300px]"/>
        </div>
        <div>
          <h1 className="font-bold my-3">{item.title}</h1>
          <h1 className="my-3">{item.description}</h1>
          <div className="flex justify-between mx-5">
            <p className="text-3xl font-bold">${item.price}</p>
            <div
            onClick={removeFromCart} className="text-red-600">
              <FcDeleteDatabase className="text-red-600 text-3xl"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
