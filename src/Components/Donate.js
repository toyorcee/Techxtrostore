import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";

const Donate = () => {
  const publicKey = "pk_test_5c6ac8558f4aa956116ce262e3c396b4de098a39";
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      alert(
        "Payment successful!, kindly continue shopping as your order is being processed!."
      );
      navigate("/");
    },
    onClose: () => {
      alert("Are you sure you want to cancel payment?");
      navigate("/cart");
    },
  };

  const style = {
    input:
      "block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500",
    button: "block w-full px-4 py-2 bg-[#1369A1] text-white rounded-md",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-center text-[25px] my-4 font-[600]">
        Make your payment here
      </h1>
      <div className="max-w-md mx-auto my-4">
        <input
          type="email"
          placeholder="Email"
          className={style.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className={style.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          className={style.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone number"
          className={style.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <PaystackButton className={style.button} {...componentProps} />
      </div>
    </div>
  );
};

export default Donate;
