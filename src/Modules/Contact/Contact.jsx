import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./Contact.css";

// Validation Schema
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();

  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_0lyx3oi",
        "template_iru4ntl",
        form.current,
        "gkYdm29_4vOpv2k6p"
      )
      .then(
        (result) => {
          console.log(result.text);
          reset(); // Reset the form after successful submission
          alert("Email Sent");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "John Doe",
      validation: { required: "Name is required" },
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "example@gmail.com",
      validation: { required: "Email is required" },
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "",
      validation: { required: "Message is required" },
    },
  ];

  const sectionStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    color:
      mode === "dark" ? theme.palette.grey[10] : theme.palette.primary[900],
    padding: "1rem 2rem",
  };

  const subtitleStyle = {
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

  const errorStyles = {
    color:
      mode === "dark"
        ? theme.palette.primary.error
        : theme.palette.primary.error,
  };

  const labelStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
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
  };

  const submitButtonStyle = {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section style={sectionStyles}>
      {/* Contact Us Header */}
      <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <Typography
          variant="h2"
          style={subtitleStyle}
          className="capitalize py-5"
        >
          CONTACT US
        </Typography>
        <p style={paragraphStyles}>Contact us for any help or support.</p>
      </Box>

      {/* Form Section */}
      <motion.Box
        className="container px-5 py-1 mx-auto"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box className="lg:w-1/2 md:w-2/3 mx-auto">
          <Box className="-m-2">
            <form className="contactForm" onSubmit={handleSubmit(sendEmail)}>
              {formFields.map((field) => (
                <Box key={field.id} className="p-2 w-full">
                  <Box className="relative">
                    <label
                      style={labelStyle}
                      htmlFor={field.id}
                      className="leading-7 text-base"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        {...register(field.id, field.validation)}
                        className="w-full rounded border focus:ring-2 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        style={{
                          backgroundColor:
                            formStyles.inputStyles.backgroundColor,
                          color: formStyles.inputStyles.color,
                          borderColor: formStyles.inputStyles.borderColor,
                          focus: {
                            borderColor: formStyles.focusStyles.borderColor,
                            boxShadow: `0 0 0 2px ${formStyles.focusStyles.ringColor}`,
                          },
                        }}
                      ></textarea>
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        {...register(field.id, field.validation)}
                        className="w-full rounded border focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder={field.placeholder}
                        style={{
                          backgroundColor:
                            formStyles.inputStyles.backgroundColor,
                          color: formStyles.inputStyles.color,
                          borderColor: formStyles.inputStyles.borderColor,
                          focus: {
                            borderColor: formStyles.focusStyles.borderColor,
                            boxShadow: `0 0 0 2px ${formStyles.focusStyles.ringColor}`,
                          },
                        }}
                      />
                    )}
                    {errors[field.id] && (
                      <span style={errorStyles} className="error">
                        {errors[field.id].message}
                      </span>
                    )}
                  </Box>
                </Box>
              ))}
              <Box className="p-2 w-full">
                <button
                  style={submitButtonStyle}
                  className="flex mx-auto py-2 px-3 focus:outline-none rounded text-base"
                >
                  SEND MESSAGE
                </button>
              </Box>
            </form>
          </Box>
        </Box>
      </motion.Box>
    </section>
  );
};

export default Contact;
