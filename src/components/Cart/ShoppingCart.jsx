import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import useCartStore from "../../store/CartStore";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const {
    isOpen,
    toggleCart,
    cartItems,
    removeFromCart,
    // clearCart,
  } = useCartStore();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      className={`relative z-10 ${isOpen ? "block" : "hidden"}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      dir=""
    >
      <div
        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        onClick={toggleCart}
      ></div>
      <div className="fixed inset-0 overflow-hidden animate_from_right">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 flex max-w-full pointer-events-none phone_height xl:h-full">
            <div className="w-screen max-w-md pointer-events-auto">
              <div className="flex flex-col h-full overflow-y-auto bg-white shadow-xl">
                <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-mainColorLight"
                      id="slide-over-title"
                    >
                      مراجعة السلة{" "}
                    </h2>
                    <div className="flex items-center h-7">
                      <button
                        type="button"
                        className="relative p-2 -m-2 text-mainColorLight hover:text-mainColorDark"
                        onClick={toggleCart}
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex gap-4 py-6">
                            <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200">
                              {/* Replace the src attribute with your actual image source */}
                              <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-col flex-1">
                              <div>
                                <div className="flex justify-between gap-4 text-base font-medium text-gray-900">
                                  <h3 className="w-24 truncate">
                                    <p className="truncate">{item.name}</p>
                                  </h3>
                                  <p className="ml-4">
                                    EGP {item.price.toFixed(2)}
                                  </p>
                                </div>
                                {/* <p className="mt-1 text-sm text-gray-500">
                                  Product description
                                </p> */}
                              </div>
                              <div className="flex items-end justify-between flex-1 text-sm">
                                <p className="text-mainColorLight">
                                  X {item.quantity}
                                </p>

                                <div className="flex flex-col gap-2 translate-x-4">
                                  <button
                                    type="button"
                                    onClick={() => removeFromCart(item.id)}
                                    className="flex items-center gap-1 font-medium text-mainColorLight hover:text-mainColorDark"
                                  >
                                    <span>إزالة من السلة</span> <MdDelete />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-mainColorLight sm:px-6">
                  <div className="flex justify-between text-base font-medium text-mainColorLight">
                    <p>الإجمالي</p>
                    <p>EGP {calculateTotal().toFixed(2)}</p>
                  </div>
                  {/* <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p> */}
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      onClick={toggleCart}
                      className="flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-md shadow-sm main_gradient--1"
                    >
                      الإستمرار الي الدفع
                    </Link>
                  </div>
                  <div className="flex justify-center mt-6 text-sm text-center text-mainColorLight">
                    <p>
                      <button
                        type="button"
                        onClick={toggleCart}
                        className="font-medium text-mainColorLight hover:text-mainColorDark"
                      >
                        الإستمرار في التسوق
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
