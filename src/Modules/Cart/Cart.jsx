import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./Cart.css";

const Cart = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();

  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleIncrease = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const handleDecrease = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Product successfully removed from cart");
    navigate("/cart");
  };

  const handlePlusMinusIcons = [
    {
      viewBox: "0 0 448 512",
      path: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
      onClick: (id) => handleDecrease(id),
    },
    {
      viewBox: "0 0 448 512",
      path: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0-17.67 14.33-32 32-32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
      onClick: (id) => handleIncrease(id),
    },
  ];

  const containerStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    color:
      mode === "dark" ? theme.palette.grey[10] : theme.palette.primary[900],
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1rem 2rem",
  };

  const elementStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const countStyle = {
    color: mode === "dark" && theme.palette.primary.light,
  };

  const headerStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const buttonBoxShadowStyle = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
    color:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.neutral.light,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // If cart is empty, show encouragement
  if (carts.length === 0) {
    // Toast notification
    toast.info(
      "Your cart is empty! Head over to the shop and find more products!"
    );

    return (
      <Box sx={containerStyles}>
        <Box
          style={headerStyle}
          className="h-[37vh] flex justify-center items-center align-items-center text-4xl"
        >
          Cart is Empty
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/products")}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
            }}
          >
            Go to Shop
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <section sx={containerStyles}>
      <Box sx={containerStyles} className="container-fluid mx-auto">
        <Box sx={elementStyles} className="flex shadow-md my-10" id="flexd">
          <Box sx={containerStyles} className="w-3/4 px-10 py-10" id="big">
            <Box className="flex justify-between border-b pb-8">
              <Typography
                variant="h3"
                style={headerStyle}
                className="font-semibold text-2xl"
              >
                Shopping Cart
              </Typography>
              <Typography
                variant="h3"
                style={headerStyle}
                className="font-semibold text-2xl"
              >
                {carts?.length} {carts?.length === 1 ? "Item" : "Items"}
              </Typography>
            </Box>
            <Box className="flex mt-10 mb-5">
              <Typography
                variant="h6"
                style={headerStyle}
                className="font-semibold text-center uppercase w-2/5"
              >
                Product details
              </Typography>
              <Typography
                variant="h6"
                style={headerStyle}
                className="font-semibold text-center uppercase w-1/5"
              >
                Quantity
              </Typography>
              <Typography
                variant="h6"
                style={headerStyle}
                className="font-semibold text-center uppercase w-1/5"
              >
                Price
              </Typography>
              <Typography
                variant="h6"
                style={headerStyle}
                className="font-semibold text-center uppercase w-1/5"
              >
                Total
              </Typography>
            </Box>
            {carts?.map((cart) => {
              return (
                <Box className="flex items-center -mx-8 px-6 py-5">
                  <Box className="flex w-2/5">
                    <Box className="w-20">
                      <img
                        className="h-24"
                        src={cart?.image}
                        alt={cart?.title}
                      />
                    </Box>
                    <Box className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{cart?.title}</span>
                      <span className="text-red-500 text-xs capitalize">
                        {cart?.category}
                      </span>
                      <Box
                        sx={{
                          ...elementStyles,
                        }}
                        href="#"
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                        className="mt-1 font-semibold hover:text-red-500 text-xs cursor-pointer w-auto max-w-fit"
                        onClick={() => removeProduct(cart?.id)}
                      >
                        <CancelOutlinedIcon fontSize="small" />
                        <span>Remove</span>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex justify-center items-center w-1/5">
                    <svg
                      style={elementStyles}
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox={handlePlusMinusIcons[0].viewBox}
                      onClick={() => handlePlusMinusIcons[0].onClick(cart?.id)}
                    >
                      <path d={handlePlusMinusIcons[0].path} />
                    </svg>
                    <input
                      style={countStyle}
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={cart?.quantity}
                    />
                    <svg
                      style={elementStyles}
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox={handlePlusMinusIcons[1].viewBox}
                      onClick={() => handlePlusMinusIcons[1].onClick(cart?.id)}
                    >
                      <path d={handlePlusMinusIcons[1].path} />
                    </svg>
                  </Box>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${cart?.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${cart?.price * cart?.quantity}
                  </span>
                </Box>
              );
            })}

            <Link
              to={"/products"}
              style={buttonBoxShadowStyle}
              className="p-2 flex items-center justify-center font-semibold mt-10 shadow-lg"
            >
              <svg className="fill-current mr-2  w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </Box>

          <Box id="summary" className="w-1/4 px-8 py-3">
            <h1 className="font-normal text-2xl border-b pb-8">
              Order Summary
            </h1>
            <Box className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {carts?.length}
              </span>
              <span className="font-semibold text-sm">
                ${total?.toFixed(2)}
              </span>
            </Box>
            <Box>
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select style={countStyle} className="block p-2  w-full text-sm">
                <option>Standard shipping - $10.24</option>
              </select>
            </Box>
            <Box className="py-10">
              <label
                for="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </Box>
            <button
              style={buttonBoxShadowStyle}
              className=" px-5 py-2 text-sm uppercase font-semibold"
            >
              Apply
            </button>
            <Box className="border-t mt-8">
              <Box className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${(total + 10.24).toFixed(2)}</span>
              </Box>
              <Link
                to="/checkout"
                state={{ finalPrice: (total + 10.24).toFixed(2) }}
              >
                <button
                  style={buttonBoxShadowStyle}
                  className="font-semibold py-3 text-sm  uppercase w-full"
                >
                  Checkout
                </button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Cart;
