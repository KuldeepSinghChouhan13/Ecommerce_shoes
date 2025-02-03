import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoArrowLeft } from "react-icons/go";

const Cart = ({ cartItems, removeFromCart }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const notify1 = () => toast.error("Remove your Item");
  const notifyPromoApplied = () => toast.success("Promo code applied!");
  const notifyInvalidPromo = () => toast.error("Invalid promo code!");

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const applyPromoCode = () => {
    if (promoCode === "promoCode") {
      setDiscount(0.2 * totalPrice); //20
      notifyPromoApplied();
    } else {
      setDiscount(0);
      notifyInvalidPromo();
    }
  };

  return (
    <div className="flex gap-2 mt-20">
      {/* Left */}
      <div className="container bg-blue-100 p-4  rounded-lg py-12 mx-auto ">
       <button className="flex  hover:text-blue-700 hover:underline cursor-pointer" onClick={() => navigate("/Product")}><GoArrowLeft size={25}/>Back</button>
        <div className=" flex justify-around ">
          <h2 className="text-2xl   font-bold mb-6 ">Your Cart</h2>
          <h3 className="text-2xl   font-bold mb-6 ">
            {cartItems.length} Item
          </h3>
        </div>
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg rounded-lg border hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              >
                <div>
                  <img
                    src={item.thumbnail}
                    className="h-32 w-auto object-cover object-center mb-4 rounded  "
                  />
                  <h3 className="text-lg font-medium flex text-gray-800 mb-2 text-center">
                    {item.title.length>15? `${item.title.slice(0,15)}...`:item.title}
                  </h3>
                  <p>Price: {item.price}</p>
                </div>
                <div className="mt-4" >
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                  onClick={() => {
                    removeFromCart(index);
                    notify1();
                  }}
                >
                  X
                </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Right  */}

      <div className="w-1/4 bg-blue-100 p-6 rounded-lg shadow-lg">
      <div >
        <h2 className="text-xl font-bold  mb-4">Order Summary</h2>
        </div>
        <hr className="border-black  my-4" />
          {/* Promo */}
        <div className="mb-6 p-2">
          <label
            htmlFor="promo"
            className="block text-sl font-medium mb-2"
          >
            Promo Code
          </label>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-all mt-4 w-full"
            onClick={applyPromoCode}
          >
            Apply Promo
          </button>
        </div>

        {/* Total */}
        <div>
          <div className="mb-6">
            <p className="text-sl font-medium ">Item:{cartItems.length}</p>
            <p className="text-lg font-bold">Rs:-{totalPrice.toFixed(2)}</p>

            {discount > 0 && (
              <div className="text-green-800">
                <p className="text-sm font-medium">Discount Applied:</p>
                <p className="text-lg font-bold">Rs:-{discount.toFixed(2)}</p>
              </div>
            )}

            <hr className="border-black  my-4" />
            <p className="text-lg font-bold">
              Total Price:-{(totalPrice - discount).toFixed(2)}
            </p>
          </div>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-500 transition-all"
            onClick={() => toast.success("Order placed successfully!")}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
