import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddBillForm({ products, setProducts }) {
  const [emailVerified, setEmailVerified] = useState(false);
  let [issue, setIssue] = useState(null);
  let [phoneIssue, setPhoneIssue] = useState(null);
  let [success, setSuccess] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("https://power-hack-server-yq09.onrender.com/billing-list")
      .then((res) => res.json())
      .then((data) => {
      setProducts(data);
      });
  }, [products, setProducts]);

  const onSubmit = (data) => {
    axios
      .post("https://power-hack-server-yq09.onrender.com/add-billing", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added a New Billing Successfully!");
          reset();
        }
      });
  };

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);


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
    <div className="my-10">
      <div className="container px-12 py-5 mx-auto bg-slate-700">
        <div className="md:grid md:grid-cols-2 md:gap-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-white">
              Add Billing
            </h3>
            <p className="mt-1 text-sm text-white">
              This information will be displayed publicly so be careful what you
              share.
            </p>
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
                        type="text"
                        id="name"
                        autoComplete="given-name"
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
                        onChange={(e) => {ValidateEmail(e.target.value) }}
                        autoComplete="given-title"
                        className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                      />
                    
                    {!emailVerified?

                          <>{!emailVerified || issue ? (
                            <small style={{ color: "coral" }}>{issue}</small>
                          ) : (
                            <></>
                          )}</> :
                          <>
                          {emailVerified || success ? (
                            <small style={{ color: "white" }}>{success}</small>
                          ) : (
                            <></>
                          )}
                          </>
                    }
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
                        onChange={(e)=>ValidatePhone(e)}
                        autoComplete="given-title"
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
                        {...register("amount", { required: true })}
                        type="text"
                        id="amount"
                        autoComplete="given-title"
                        className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-slate-700 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
