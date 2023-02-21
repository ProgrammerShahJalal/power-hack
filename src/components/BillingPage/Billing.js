import React, { useEffect, useState } from "react";
import BillPopup from "./BillPopup";
import UpdatePopup from "./UpdatePopup";
import Pagination from "./Pagination";

const Billing = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  useEffect(() => {
    setIsLoading(true);
    fetch("https://power-hack-server-yq09.onrender.com/billing-list")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

 
 

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
// const currentPosts = ;

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);


  //SEARCH FUNCTIONALITY
  const [foundResults, setFoundResults] = useState(products);

  const filterResult = (e) => {
    const keyword = e.target.value;

    const results = products?.filter((pd) => {
      return (
        pd?.name?.toLowerCase().includes(keyword.toLowerCase()) ||
        pd?.email?.toLowerCase().includes(keyword.toLowerCase()) ||
        pd?.phone?.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    if (results.length) {
      setFoundResults(results);
    } else if (!results) {
      setFoundResults(products);
    } else {
      setFoundResults([]);
    }
  };

  useEffect(() => {
    setFoundResults(products);
  }, [products]);


  //DELETE A PRODUCT
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete? The product will be deleted."
    );
    if (proceed) {
      const url = `https://power-hack-server-yq09.onrender.com/delete-billing/${id}`;
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
      <div className="my-5 grid grid-cols-1 justify-center items-center place-items-center">
        <h2 className="font-bold text-2xl">Our Billing List</h2>

        <div className="my-6 flex justify-between items-center">
          <div>
            <input
              type="text"
              placeholder="Search..."
              onChange={filterResult}
              className="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block border border-2 w-full shadow-sm sm:text-sm outline-none rounded-md"
            />
          </div>
          <div className="w-96 mx-auto px-10 grid grid-cols-2 gap-3 justify-center items-center">
            <button className="mt-2 text-white bg-purple-600 justify-center px-3 py-2 rounded-md hover:bg-green-500 transition">
              <BillPopup products={products} setProducts={setProducts}/>
            </button>
          </div>
        </div>

        <div className="w-80 md:w-auto overflow-x-scroll md:overflow-hidden">
          <table className="table-auto border-collapse border border-blue-500">
            <thead>
              <tr>
                <th className="border border-slate-600 text-center px-2">Billing ID</th>
                <th className="border border-slate-600 text-center px-2">Full Name</th>
                <th className="border border-slate-600 text-center px-2">Email</th>
                <th className="border border-slate-600 text-center px-2">Phone</th>
                <th className="border border-slate-600 text-center px-2">Paid Amount</th>
                <th className="border border-slate-600 text-center px-2">Action</th>
              </tr>
            </thead>
            <tbody>
            
              {foundResults?.slice(indexOfFirstPost, indexOfLastPost).map((product) => (
                <tr key={product.id}>
                  <td className="border border-slate-700 px-2 text-center">{product._id}</td>
                  <td className="text-blue-800 font-semibold border border-slate-700 px-2">
                    {product.name}
                  </td>
                  <td className="border border-slate-700 px-2 text-center">{product.email}</td>
                  <td className="border border-slate-700 px-2 text-center">{product.phone}</td>
                  <td className="border border-slate-700 px-2 text-center">${product.amount}</td>
                  <td className="border border-slate-700 flex text-center">
                    <div className="w-96 mx-auto px-10 grid grid-cols-2 gap-3 justify-center items-center">
                      <button className="m-1 text-white bg-purple-600 justify-center px-2 py-2 rounded-md hover:bg-green-500 transition">
                        <UpdatePopup products={products} setProducts={setProducts} id={product._id}/>
                      </button>
                      <button onClick={() => handleDeleteProduct(product._id)}
                      className="m-1 text-white bg-red-600 justify-center px-3 py-2 rounded-md hover:bg-red-500 transition">
                      Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
        </div>
      </div>
    </div>
  );
};

export default Billing;
