import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const formFields = { ...fields };
    const formErrors = {};
    let formIsValid = true;

    //Name
    if (!formFields["name"]) {
      formIsValid = false;
      formErrors["name"] = "Cannot be empty";
    }

    if (typeof formFields["name"] !== "undefined") {
      if (!formFields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        formErrors["name"] = "Only letters";
      }
    }

    //Email
    if (!formFields["email"]) {
      formIsValid = false;
      formErrors["email"] = "Cannot be empty";
    }

    if (typeof formFields["email"] !== "undefined") {
      let lastAtPos = formFields["email"].lastIndexOf("@");
      let lastDotPos = formFields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          formFields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        formFields["email"] = "Email is not valid";
      }
    }
    setErrors(formErrors);
    return formIsValid;
  };

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value,
    });
  };

  const form = useRef();
  const cancelCourse = () => {
    document.getElementById("cancel").reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (handleValidation()) {
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
            cancelCourse();
            alert("Email Sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Form has errors.");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="title-font font-medium text-3xl mb-2 text-gray-900 font-weight: 800">
            CONTACT US
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-[#F05804]">
            Contact us for any help or support.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="-m-2">
            <form
              className="contactForm"
              ref={form}
              onSubmit={sendEmail}
              id="cancel"
            >
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="name" className="leading-7 text-xl text-[#9A031E]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="your_name"
                    onChange={(e) => handleChange("name", e.target.value)}
                    value={fields["name"]}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="John Doe"
                  />
                  <span className="error">{errors["name"]}</span>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-xl text-[#9A031E]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="your_email"
                    onChange={(e) => handleChange("email", e.target.value)}
                    value={fields["email"]}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="example@gmail.com"
                  />
                  <span className="error">{errors["email"]}</span>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-xl text-[#9A031E]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-[#9A031E] py-2 px-8 focus:outline-none rounded text-lg"
                  onClick={(e) => sendEmail(e)}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-[#F05804]">example@email.com</a>
            <p className="leading-normal my-5">
              49 Smith St.
              <br />
              Saint Cloud, MN 56301
            </p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
