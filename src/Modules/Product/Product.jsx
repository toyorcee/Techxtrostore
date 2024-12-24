import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const buttonRef = useRef(null);
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();

  const stars = [
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 text-indigo-500"
      viewBox="0 0 24 24"
      key="star1"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 text-indigo-500"
      viewBox="0 0 24 24"
      key="star2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 text-indigo-500"
      viewBox="0 0 24 24"
      key="star2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    <svg
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 text-indigo-500"
      viewBox="0 0 24 24"
      key="star2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-4 h-4 text-indigo-500"
      viewBox="0 0 24 24"
      key="star2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>,
  ];

  const socialIcons = [
    <svg
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>,
    <svg
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>,
    <svg
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    </svg>,
  ];

  const sectionStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    color:
      mode === "dark" ? theme.palette.grey[10] : theme.palette.primary[900],
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1rem 2rem",
  };

  const colorButton = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.main,
  };

  const headerStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const reviewStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const paragraphStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const buynowButton = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.main,
    color:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.neutral.light,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const addtocartButton = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.main,
    color:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.neutral.light,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const cardMediaStyles = {
    filter: mode === "dark" ? "brightness(70%)" : "none",
    objectFit: "contain",
    backgroundColor: mode === "dark" && theme.palette.neutral.light,
  };

  const elementStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(
          "Failed to fetch product!, Check your network connection and refresh."
        );
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (buttonRef.current) {
        buttonRef.current.style.animation = "shake 0.5s ease-in-out";
        setTimeout(() => {
          buttonRef.current.style.animation = "";
        }, 500);
      }
    }, 3000); // Trigger every 3 seconds

    return () => clearInterval(interval); //
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  let navigate = useNavigate();
  const handleCart = (product, redirect) => {
    const obj = localStorage.getItem("cart");
    const cart = JSON.parse(obj) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      const myobj = updatedCart;
      const myJSON = JSON.stringify(myobj);
      localStorage.setItem("cart", myJSON);
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    toast.success("Product added to cart");
    if (redirect) {
      navigate("/cart");
    }
  };

  return (
    <section style={sectionStyles}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={elementStyles} />
        </Box>
      ) : (
        <>
          {!Object.keys(product).length > 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Typography
                variant="h6"
                style={headerStyle}
                className="font-semibold"
              >
                No products available
              </Typography>
            </Box>
          ) : (
            <>
              <Box className="container-fluid px-5 py-24 mx-auto">
                <Box className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    alt={product?.title}
                    className="lg:w-1/2 w-full lg:h-auto max-h-[500px] h-64 object-contain object-center rounded"
                    src={product?.image}
                    sx={cardMediaStyles}
                  />
                  <Box className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <Typography
                      variant="h4"
                      sx={{
                        ...headerStyle,
                        textTransform: "Uppercase",
                      }}
                      className="font-medium title-font"
                    >
                      {product?.category}
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        ...headerStyle,
                        textTransform: "Uppercase",
                      }}
                    >
                      {product?.title}
                    </Typography>
                    <Box className="flex mb-4 gap-2">
                      <Box className="flex items-center gap-2">
                        {stars.map((icon, index) => (
                          <Box key={index}>{icon}</Box>
                        ))}
                        <Typography style={reviewStyle}>4 Reviews</Typography>
                      </Box>
                      <Box className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                        {socialIcons.map((icon, index) => (
                          <a href="#" style={reviewStyle} key={index}>
                            {icon}
                          </a>
                        ))}
                      </Box>
                    </Box>
                    <p style={paragraphStyles}>{product?.description}</p>
                    <Box className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <Box className="flex gap-2">
                        <span
                          style={{ ...paragraphStyles }}
                          className="font-semibold"
                        >
                          Color
                        </span>
                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                      </Box>
                      <Box className="flex ml-6 items-center gap-2">
                        <span
                          style={{ ...paragraphStyles }}
                          className="font-semibold"
                        >
                          Style
                        </span>
                        <div className="relative">
                          <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                            <option>SM</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </div>
                      </Box>
                    </Box>
                    <Box className="flex justify-between items-center" id="fdc">
                      <Box className="flex" id="top">
                        <span
                          style={reviewStyle}
                          className="title-font font-medium text-2xl text-gray-900"
                        >
                          ${product?.price}
                        </span>
                        <button
                          style={colorButton}
                          className="rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4"
                        >
                          <svg
                            fill={
                              mode === "dark"
                                ? theme.palette.primary.main
                                : theme.palette.neutral.light
                            }
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                          </svg>
                        </button>
                      </Box>
                      <Box className="flex justify-content-between" id="btns">
                        <button
                          ref={buttonRef}
                          style={{
                            ...buynowButton,
                            animation: buttonRef.current
                              ? "shake 0.5s ease-in-out 3s infinite"
                              : "",
                          }}
                          className="flex ml-auto border-0 py-2 px-6 focus:outline-none rounded-full mr-2 font-semibold"
                          onClick={() => handleCart(product, true)}
                        >
                          BUY NOW
                        </button>
                        <button
                          style={addtocartButton}
                          className="flex ml-auto border-0 py-2 px-6 focus:outline-none rounded-full font-semibold"
                          onClick={() => handleCart(product)}
                        >
                          ADD TO CART
                        </button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Product;
