import { Field, Form, Formik } from "formik";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCartStore from "../../store/CartStore";

const DetailsSidebar = ({ closeSidebar }) => {
  const {
    addToCart,
    cartItems,
    toggleCart,
    toggleSidebar,
    decreaseQuantity,
    increaseQuantity,
  } = useCartStore();
  console.log("🚀 ~ file: MenuCard.jsx:6 ~ MenuCard ~ cartItems:", cartItems);

  const initialValues = {
    size: "",
    extras: [],
  };

  const handleSizeChange = (value) => {
    console.log("Selected Size:", value);
  };

  const extrasOptions = [
    { id: 1, label: "صوص", price: 5 },
    { id: 2, label: "yes", price: 5 },
  ];

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "برجر",
      price: 50,
      image: "/1665341024_Bigmac.png",
      desc: "testing",
    });

    toggleSidebar();
    toggleCart();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => {
        return (
          <Form>
            <aside className="fixed top-0 left-0 z-50 w-full h-full p-8 py-16 overflow-y-auto bg-white shadow-lg animate_sidebar">
              <AiOutlineClose
                onClick={closeSidebar}
                className="absolute text-3xl text-gray-700 cursor-pointer top-4 right-4"
              />

              <div className="">
                <img
                  src="/1665341024_Bigmac.png"
                  alt="product"
                  className="w-full mb-6 rounded-lg"
                />

                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-semibold">بيج تيستي</h3>
                  <p className="text-base text-gray-700">
                    حجم وطعم! قطعة لحم بقري مشوي مع 3 شرائح رائعة من جبنة
                    إيمانتال على شريحتين طماطم، خس مقطع، بصل لذيذ، صوص بيج
                    تايستي المميز
                  </p>
                  <p className="mt-6 text-lg font-semibold text-gray-500">
                    EGP 122.5
                  </p>
                </div>
                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-6">
                  <h3 className="mb-2 text-lg font-semibold">المقاسات</h3>
                  <div className="flex items-end mb-4">
                    <Field
                      type="radio"
                      required
                      name="size"
                      value="17"
                      id="size17"
                      // onChange={() => handleSizeChange("17")}
                      className="w-4 h-4 p-2 mr-2 border border-gray-300 rounded-full"
                    />
                    <label htmlFor="size17" className="mr-2">
                      كبير
                    </label>
                    <div className="mr-auto text-start">
                      <span className="text-lg font-semibold text-gray-500">
                        EGP 132.49
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Field
                      type="radio"
                      required
                      name="size"
                      value="18"
                      id="size18"
                      // onChange={() => handleSizeChange("18")}
                      className="w-4 h-4 p-2 mr-2 border border-gray-300 rounded-full"
                    />
                    <label htmlFor="size18" className="mr-2">
                      وسط
                    </label>
                    <div className="mr-auto text-start">
                      <span className="text-lg font-semibold text-gray-500">
                        EGP 122.5
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />

                <div className="pb-24 mb-6">
                  <h3 className="mb-2 text-lg font-semibold">الإضافات</h3>
                  <div>
                    {extrasOptions.map((option) => (
                      <div className="flex items-end mb-3" key={option.id}>
                        <Field
                          type="checkbox"
                          name="extras"
                          // value={option.id}
                          id={`extra${option.id}`}
                          className="w-4 h-4 p-2 mr-2 border border-gray-300 rounded"
                        />
                        <label
                          htmlFor={`extra${option.id}`}
                          className="mr-2 text-base"
                        >
                          {option.label}
                        </label>
                        <span className="mr-auto text-base text-gray-500 translate-y-1">
                          + EGP {option.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="fixed left-0 flex flex-col items-center w-full gap-4 px-2 py-2 bg-white bottom-16">
                {/* <div className="flex items-center gap-4">
              <span
                onClick={() => increaseQuantity(1)}
                className="grid w-8 h-8 text-lg bg-gray-200 rounded-full place-content-center "
              >
                +
              </span>
              <p className="text-lg">1</p>
              <span
                onClick={() => decreaseQuantity(1)}
                className="grid w-8 h-8 text-lg bg-gray-200 rounded-full place-content-center "
              >
                -
              </span>
            </div> */}
                <button
                  type="submit"
                  onClick={handleAddToCart}
                  className="bg-[#dc3545] rounded-lg text-white py-2 w-full mb-4"
                >
                  اطلب الأن
                </button>
              </div>
            </aside>
          </Form>
        );
      }}
    </Formik>
  );
};

export default DetailsSidebar;
