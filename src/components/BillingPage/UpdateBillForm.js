import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useParams } from 'react-router-dom';

export default function UpdateBillForm() {


    const [product, setProduct] = useState({});
    const { id } = useParams();

    // update product info
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateProduct = { billingId:product?.billingId, name: updateName, email: product?.email, phone: product?.phone, amount: product?.amount};
        setProduct(updateProduct);
    }
    const handleEmailChange = e => {
        const updateEmail = e.target.value;
        const updateProduct = { billingId:product?.billingId, name: product?.name, email: updateEmail, phone: product?.phone, amount: product?.amount};
        setProduct(updateProduct);
    }
    const handlePhoneChange = e => {
        const updatePhone = e.target.value;
        const updateProduct = { billingId:product?.billingId, name: product?.name, email: product?.email, phone: updatePhone, amount: product?.amount};
        setProduct(updateProduct);
    }
    const handleAmountChange = e => {
        const updatePrice = e.target.value;
        const updateProduct = { billingId:product?.billingId, name: product?.name, email: product?.email, phone: product?.phone, amount: updatePrice };
        setProduct(updateProduct);
    }

    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://power-hack-server-yq09.onrender.com/billing-list/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    const onSubmit = (product) => {
        console.log(product);
        axios.put(`https://power-hack-server-yq09.onrender.com/update-billing/${id}`, product)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('Updated the product successfully!');
                    reset();
                }
            })
    }

    return (

        <div className="container w-96 mx-auto px-5 py-5 my-10 mt-8 bg-slate-700">
            <div className="md:grid md:grid-cols-1 md:gap-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-white">Update the {product?.name} product</h3>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="md:h-80 h-64 shadow sm:rounded-md overflow-y-scroll">
                            <div className="px-4 py-5 bg-slate-700 space-y-6 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="author-name" className="block text-sm font-medium text-white">
                                            Full Name
                                        </label>
                                        <input
                                            onChange={handleNameChange}
                                            type="text"
                                            id="name"
                                            {...register("name", { required: true })}
                                            className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                                            />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-white">
                                            Email
                                        </label>
                                        <input
                                            onChange={handleEmailChange}
                                            {...register("email", { required: true })}
                                            type="text"
                                            id="email"

                                            className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                                            />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-white">
                                            Phone
                                        </label>
                                        <input
                                            onChange={handlePhoneChange}
                                            {...register("phone", { required: true })}
                                            type="text"
                                            id="phone"

                                            className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm outline-none rounded-md"
                                            />
                                    </div>
                                    
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-white">
                                            Paid Amount
                                        </label>
                                        <input
                                            onChange={handleAmountChange}
                                            {...register("amount", { required: true })}
                                            type="text"
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
                            <Link to='/billing'>
                            <button
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Back
                                </button>
                            </Link>
                            
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}