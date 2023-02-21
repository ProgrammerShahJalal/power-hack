import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Billing from "./Billing";

export default function UpdateBillForm({ id }) {
  const [emailVerified, setEmailVerified] = useState(false);
  let [issue, setIssue] = useState(null);
  let [phoneIssue, setPhoneIssue] = useState(null);
  let [success, setSuccess] = useState(null);
  const [product, setProduct] = useState({});



  // update product info
  const handleNameChange = (e) => {
    const updateName = e.target.value;
    const updateProduct = {
      billingId: product?.billingId,
      name: updateName,
      email: product?.email,
      phone: product?.phone,
      amount: product?.amount,
    };
    setProduct(updateProduct);
  };
  const handleEmailChange = (e) => {
    const updateEmail = e.target.value;
    const updateProduct = {
      billingId: product?.billingId,
      name: product?.name,
      email: updateEmail,
      phone: product?.phone,
      amount: product?.amount,
    };
    setProduct(updateProduct);
  };
  const handlePhoneChange = (e) => {
    const updatePhone = e.target.value;
    const updateProduct = {
      billingId: product?.billingId,
      name: product?.name,
      email: product?.email,
      phone: updatePhone,
      amount: product?.amount,
    };
    setProduct(updateProduct);
  };
  const handleAmountChange = (e) => {
    const updatePrice = e.target.value;
    const updateProduct = {
      billingId: product?.billingId,
      name: product?.name,
      email: product?.email,
      phone: product?.phone,
      amount: updatePrice,
    };
    setProduct(updateProduct);
  };

  const { register, handleSubmit, reset } = useForm();


  useEffect(() => {
    fetch(`https://power-hack-server-yq09.onrender.com/update-billing/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const onSubmit = (product) => {
    axios
      .put(
        `https://power-hack-server-yq09.onrender.com/update-billing/${id}`,
        product
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          alert("Updated the product successfully!");
          reset();
        }
      });
  };


  //EMAIL VALIDATION
  function ValidateEmail(email) {
    if (
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailVerified(true);
      setSuccess("✓ Congratulations!");
      return true;
    }
    setEmailVerified(false);
    setIssue("Please enter a valid email address");
    return false;
  }

  //PHONE NUMBER VALIDATION
  function ValidatePhone(e) {
    if (e.target.value.length < 11) {
      setPhoneIssue("Phone number must be at least 11 numbers");
      return false;
    }
    setPhoneIssue(null);
    return true;
  }

  return (
   
      <div className="container w-96 mx-auto px-5 py-5 my-10 mt-8 bg-slate-700">
        <div style={{display: 'none'}}>
          <Billing/>
        </div>
      <div className="md:grid md:grid-cols-1 md:gap-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-white flex gap-x-1">
            Update <p className="text-green-500">{product?.name}</p> billing
          </h3>
        </div>
           <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:h-80 h-64 shadow sm:rounded-md overflow-y-scroll">
              <div className="px-4 py-5 bg-slate-700 space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="author-name"
                      className="block text-sm font-medium text-white"
                    >
                      Full Name
                    </label>
                    <input
                      onChange={handleNameChange}
                      defaultValue={product?.name}
                      autoComplete={product?.name}
                      type="text"
                      id="name"
                      {...register("name", { required: true })}
                      className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="email"
                      defaultValue={product?.email}
                      autoComplete={product?.email}
                      onChange={(e) => {
                        ValidateEmail(e.target.value);
                        handleEmailChange(e);
                      }}
                      className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                    />

                    {!emailVerified ? (
                      <>
                        {!emailVerified || issue ? (
                          <small style={{ color: "coral" }}>{issue}</small>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <>
                        {emailVerified || success ? (
                          <small style={{ color: "white" }}>{success}</small>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-white"
                    >
                      Phone
                    </label>
                    <input
                      {...register("phone", { required: true })}
                      type="tel" id="phone"
                      defaultValue={product?.phone}
                      onChange={(e) => {
                        ValidatePhone(e);
                        handlePhoneChange(e);
                      }}
                      autoComplete={product?.phone}
                      className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                    />
                    {phoneIssue ? (
                      <small style={{ color: "coral" }}>{phoneIssue}</small>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-white"
                    >
                      Paid Amount
                    </label>
                    <input
                      defaultValue={product?.amount}
                      autoComplete={product?.amount}
                      onChange={handleAmountChange}
                      {...register("amount", { required: true })}
                      type='number'
                      id="amount"
                      className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-slate-700 text-right sm:px-6 flex g-12">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 mr-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
