import React from 'react';
import Popup from 'reactjs-popup';
import './UpdatePopup';
import UpdateBillForm from './UpdateBillForm';

const UpdatePopup = ({id}) => {

    
    return (
        <div className="">
            <Popup
               trigger={
                <button className="button text-white rounded-full px-2">
                  Edit
                </button>
              }
              modal
              nested
            >

                {(close) => (
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <UpdateBillForm id={id}/>
                    </div>
                )}
            </Popup>
        </div >
    );
};

export default UpdatePopup;