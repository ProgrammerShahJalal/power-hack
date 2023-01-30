import React from "react";
import Popup from "reactjs-popup";
import AddBillForm from "./AddBillForm";
import "./BillPopup";

const BillPopup = () => {
  return (
    <div className="">
      <Popup
        trigger={
          <button className="button text-white rounded-full px-3">
            Add Billing
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <AddBillForm />
          </div>
        )}
      </Popup>
    </div>
  );
};

export default BillPopup;
