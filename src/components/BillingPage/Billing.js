import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import AddBillForm from "./AddBillForm";
import BillPopup from "./BillPopup";

const Billing = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/billing-list")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [reducerValue]);
  
  //DELETE A PRODUCT
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete? The product will be deleted."
    );
    if (proceed) {
      const url = `http://localhost:5000/delete-billing/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully!");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };

  if (isLoading) {
    return (
      <div className="my-5 grid grid-cols-1 justify-center items-center place-items-center">
        <h2 className="font-bold text-2xl">Our Billing List</h2>
        <button type="button" disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 bg-orange-500"
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-2xl w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-8 bg-slate-700 rounded col-span-1"></div>
                  <div className="h-8 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-8 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-8 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-8 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-8 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                  <div className="h-5 bg-slate-600 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="my-8">
<div style={{display: 'none'}}>
<AddBillForm forceUpdate={forceUpdate}/>
</div>
      <div className="my-5 grid grid-cols-1 justify-center items-center place-items-center">
        <h2 className="font-bold text-2xl">Our Billing List</h2>

        <div className="my-6 flex justify-between items-center">
        <div>Search...</div>
        <div className="w-96 mx-auto px-10 grid grid-cols-2 gap-3 justify-center items-center">
        <button className="mt-2 text-white bg-purple-600 justify-center px-3 py-2 rounded-md hover:bg-green-500 transition">
          <BillPopup />
        </button>
      </div>
        </div>

        <div className="w-80 md:w-auto overflow-x-scroll md:overflow-hidden">
          <table className="table-auto border-collapse border border-blue-500">
            <thead>
              <tr>
                <th className="border border-slate-600">Billing ID</th>
                <th className="border border-slate-600">Full Name</th>
                <th className="border border-slate-600">Email</th>
                <th className="border border-slate-600">Phone</th>
                <th className="border border-slate-600">Paid Amount</th>
                <th className="border border-slate-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border border-slate-700">{product._id}</td>
                  <td className="text-blue-800 font-semibold border border-slate-700">
                    {product.name}
                  </td>
                  <td className="border border-slate-700">{product.email}</td>
                  <td className="border border-slate-700">{product.phone}</td>
                  <td className="border border-slate-700">${product.amount}</td>
                  <td className="border border-slate-700 flex">
                    <Link to={`/update-billing/${product._id}`}>Edit</Link>
                    <td
                      onClick={() => handleDeleteProduct(product._id)}
                      className="border border-slate-700 cursor-pointer border-none outline-none text-red-500 ml-3"
                    >
                      Delete
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
