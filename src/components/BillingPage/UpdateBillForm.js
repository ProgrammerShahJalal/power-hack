import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

export default function UpdateBillForm() {


    const [product, setProduct] = useState({});
    const { id } = useParams();

    // update product info
    const handleNameChange = e => {
        const updateName = e.target.value;
        console.log(updateName)
        const updateProduct = { name: updateName, category: product.category, price: product.price, status: product.status, time: product.time };
        setProduct(updateProduct);
    }
    const handleCategoryChange = e => {
        const updateCategory = e.target.value;
        const updateProduct = { name: product.name, category: updateCategory, price: product.price, status: product.status, time: product.time };
        setProduct(updateProduct);
    }
    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updateProduct = { name: product.name, category: product.category, price: updatePrice, status: product.status, time: product.time };
        setProduct(updateProduct);
    }
    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const updateProduct = { name: product.name, category: product.category, price: product.price, status: updateStatus, time: product.time };
        setProduct(updateProduct);
    }
    const handleTimeChange = e => {
        const updateTime = e.target.value;
        const updateProduct = { name: product.name, category: product.category, price: product.price, status: product.status, time: updateTime };
        setProduct(updateProduct);
    }

    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        fetch(`https://teamlance-server.onrender.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    const onSubmit = (product) => {
        console.log(product);
        axios.put(`https://teamlance-server.onrender.com/products/${id}`, product)
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
                    <h3 className="text-lg font-medium leading-6 text-white">Update the {product.name} product</h3>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="md:h-80 h-64 shadow sm:rounded-md overflow-y-scroll">
                            <div className="px-4 py-5 bg-slate-700 space-y-6 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="author-name" className="block text-sm font-medium text-white">
                                            Product Name
                                        </label>
                                        <input
                                            onChange={handleNameChange}
                                            type="text"
                                            id="product-name"
                                            {...register("name", { required: true })}
                                            className="mt-1 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-white">
                                            Category Name
                                        </label>
                                        <input
                                            onChange={handleCategoryChange}
                                            {...register("category", { required: true })}
                                            type="text"
                                            id="category"

                                            className="py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-white">
                                            Price
                                        </label>
                                        <input
                                            onChange={handlePriceChange}
                                            {...register("price", { required: true })}
                                            type="text"
                                            id="price"

                                            className="py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-white">
                                            Status
                                        </label>
                                        <input
                                            onChange={handleStatusChange}
                                            {...register("status", { required: true })}
                                            type="text"
                                            id="price"

                                            className="py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-white">
                                            Available Since
                                        </label>
                                        <input
                                            onChange={handleTimeChange}
                                            {...register("time", { required: true })}
                                            type="date"
                                            id="time"

                                            className="py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="px-4 py-3 bg-slate-700 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}