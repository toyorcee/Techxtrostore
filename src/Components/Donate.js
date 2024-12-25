import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Validation schema with Yup
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be 11 digits"),
});

const Donate = () => {
  const [openModal, setOpenModal] = useState(false);

  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();
  const finalPrice = location.state?.finalPrice || "0.00";

  const publicKey = "pk_test_5c6ac8558f4aa956116ce262e3c396b4de098a39";
  const [amount, setAmount] = useState(
    finalPrice !== "0.00" ? finalPrice : finalPrice
  );

  const navigate = useNavigate();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Watch form values in real-time
  const formValues = watch();

  const onSubmit = (data) => {
    // Populate Paystack props with validated data
    componentProps.email = data.email.trim(); // Ensure no leading/trailing spaces
    componentProps.metadata.name = data.name.trim();
    componentProps.metadata.phone = data.phone.trim();

    if (!componentProps.email) {
      toast.error("Email is required for payment!");
      return;
    }
  };

  // Dynamically update componentProps
  const componentProps = {
    email: formValues.email || "", // Watch email field
    amount: amount * 100,
    metadata: {
      name: formValues.name || "", // Watch name field
      phone: formValues.phone || "", // Watch phone field
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (reference) => {
      toast.success(
        "Payment successful! Kindly continue shopping as your order is being processed!"
      );
      navigate("/");
    },
    onClose: () => {
      console.warn("Payment Modal Closed by User");
      setOpenModal(true);
    },
  };

  const handleClosePayment = () => {
    setOpenModal(false);
    navigate("/cart");
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const sectionStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    padding: "5rem 2rem",
  };

  const headerStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const errorStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.error,
  };

  const modalButtonStyles = {
    noButtonStyles: {
      backgroundColor: theme.palette.primary.error,
      color: theme.palette.neutral.light,
    },
    yesButtonStyles: {
      backgroundColor:
        mode === "dark"
          ? theme.palette.neutral.light
          : theme.palette.primary.light,
      color:
        mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.neutral.light,
    },
  };

  const formStyles = {
    inputStyles: {
      backgroundColor:
        mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.neutral.light,
      color:
        mode === "dark"
          ? theme.palette.neutral.light
          : theme.palette.primary.light,
      borderColor:
        mode === "dark"
          ? theme.palette.neutral.light
          : theme.palette.primary.light,
    },
    focusStyles: {
      borderColor:
        mode === "dark"
          ? theme.palette.neutral.light
          : theme.palette.primary.light,
      ringColor:
        mode === "dark"
          ? theme.palette.neutral.light
          : theme.palette.primary.light,
    },
    prefixColor: {
      color:
        mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.main,
    },
  };

  const paragraphStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const inputProps = {
    type: "number",
    placeholder: "Amount",
    value: amount,
    onChange: (e) => setAmount(e.target.value),
    readOnly: finalPrice !== "0.00",
    prefix: finalPrice !== "0.00" ? "$" : "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box className="px-4 h-[100vh]" style={sectionStyles}>
      <Typography
        variant="h4"
        sx={{
          ...headerStyle,
          fontFamily: "Gilmer, sans-serif",
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          fontWeight: 600,
          textAlign: "center",
          marginY: 4,
        }}
        className="font-semibold"
      >
        Make your payment here
      </Typography>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          document.querySelector(".paystack-button").click();
        })}
        className="max-w-md mx-auto my-4"
      >
        {/* Name Field */}
        <Box className="relative w-full mb-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Name"
                className="w-full py-2 px-3 rounded"
              />
            )}
          />
          {errors.name && (
            <Typography
              variant="caption"
              sx={{ ...errorStyles, marginTop: "0.25rem" }}
            >
              {errors.name.message}
            </Typography>
          )}
        </Box>

        {/* Email Field */}
        <Box className="relative w-full mb-4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Email"
                className="w-full py-2 px-3 rounded"
              />
            )}
          />
          {errors.email && (
            <Typography
              variant="caption"
              sx={{ ...errorStyles, marginTop: "0.25rem" }}
            >
              {errors.email.message}
            </Typography>
          )}
        </Box>

        {/* Phone Field */}
        <Box className="relative w-full mb-4">
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                placeholder="Phone"
                className="w-full py-2 px-3 rounded"
              />
            )}
          />
          {errors.phone && (
            <Typography
              variant="caption"
              sx={{ ...errorStyles, marginTop: "0.25rem" }}
            >
              {errors.phone.message}
            </Typography>
          )}
        </Box>

        {/* Amount Field */}
        <Box className="relative w-full mb-4">
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <div className="flex items-center w-full">
                {/* Input field */}
                <input
                  type={inputProps.type}
                  placeholder={inputProps.placeholder}
                  value={inputProps.value}
                  onChange={inputProps.onChange}
                  onBlur={inputProps.onBlur}
                  name={inputProps.name}
                  readOnly={inputProps.readOnly || false}
                  className={`w-full py-2 pl-8 pr-3 rounded`}
                  style={{
                    color: formStyles.prefixColor.color,
                    borderColor: formStyles.inputStyles.borderColor,
                    paddingLeft: inputProps.prefix ? "2rem" : "0.75rem",
                    transition: "all 0.3s ease-in-out",
                    ":focus": {
                      borderColor: formStyles.focusStyles.borderColor,
                      boxShadow: `0 0 0 2px ${formStyles.focusStyles.ringColor}`,
                    },
                  }}
                />
                {/* Prefix inside the input */}
                {inputProps.prefix && (
                  <span
                    style={formStyles.prefixColor}
                    className="absolute left-3 text-sm"
                  >
                    {inputProps.prefix}
                  </span>
                )}
              </div>
            )}
          />
        </Box>

        {/* Submit Button */}
        <button
          type="submit"
          className={`font-semibold mt-2 w-full rounded border py-1 px-3 leading-8 text-base duration-200 ease-in-out ${
            mode === "dark"
              ? "bg-[#ffffff] text-[#0F2167]"
              : "bg-[#0F2167] text-[#ffffff]"
          } shadow-[0px_4px_6px_rgba(0,0,0,0.1)]`}
        >
          Pay Now
        </button>
      </form>

      {/* Hidden Paystack Button */}
      <PaystackButton {...componentProps} className="paystack-button hidden" />

      {/* Modal to confirm the close action */}
      <Dialog open={openModal} onClose={handleCancel}>
        <DialogTitle>Cancel Payment</DialogTitle>
        <DialogContent>
          Are you sure you want to cancel the payment? If you cancel, your cart
          will be saved, and you can continue shopping.
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancel}
            style={modalButtonStyles.noButtonStyles}
          >
            No
          </Button>
          <Button
            onClick={handleClosePayment}
            style={modalButtonStyles.yesButtonStyles}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Donate;
