import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='p-10 bg-gray-800 text-gray-200'>
                <div className='max-w-7xl mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <div>
                            </div>
                            <img className='w-20' src="https://i.ibb.co/TtrhtMD/renewable-energy.png" alt="Power Hack" />
                            <h4 className='text-2xl pb-4'>Power Hack</h4>
                            <p className='text-gray-500'>
                                A435  Lost Street <br />
                                Zero Point, PB456463 <br />
                                UK <br /> <br />
                                <strong>Phone:</strong> +1 234 5678 6892 <br />
                                <strong>Email:</strong> info@powerhack.com <br />
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className='pb-4'>Useful Links</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Home</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> About Us</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Services</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Terms of Services</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className='pb-4'>Our Services</h4>
                            <ul className='text-gray-500'>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Power</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Power Collection</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Hack</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Safe Way</li>
                                <li className='pb-4 hover:text-pink-500 cursor-pointer'><i className='fa fa-chevron-right text-pink-500'></i> Billing</li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className='pb-4'>Join Our Newsletter</h4>
                            <p className='text-gray-500 pb-2'>Join 35000+ others and don't miss the wonderful Power Hack tips, discount and more.</p>
                            <div  className='flex flex-row flex-wrap'>
                                <input className='text-gray-500 w-2/3 p-2 focus:border-yellow-500' type="email" placeholder='Type your email' />
                                <button className='p-2 w-1/3 bg-green-500 text-white hover:bg-green-600'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900 text-gray-500 px-10 justify-between items-center">
                <div className='max-w-7xl flex flex-col justify-between sm:flex-row py-4 mx-auto'>
                    <div>
                        <div className='text-center'>
                            <small>Copyright © 2023 All Rights Reserved by Power Hack</small>
                        </div>
                        <div className='text-center pb-1'>
                            <small>Developed by <Link target='_blank' to="https://github.com/ProgrammerShahJalal"><span className='text-orange-500 hover:italic cursor-pointer'>Shah Jalal</span></Link></small>
                        </div>
                    </div>

                    <div className='text-center text-xl text-white'>
                        <div className='w-10 h-10 rounded-full inline-block mx-1 pt-1 bg-orange-500 hover:bg-orange-600'>
                            <i className='cursor-pointer fab fa-facebook-f'></i>
                        </div>
                        <div className='w-10 h-10 rounded-full inline-block mx-1 pt-1 bg-orange-500 hover:bg-orange-600'>
                            <i className='cursor-pointer fab fa-linkedin-in'></i>
                        </div>
                        <div className='w-10 h-10 rounded-full inline-block mx-1 pt-1 bg-orange-500 hover:bg-orange-600'>
                            <i className='cursor-pointer fab fa-twitter'></i>
                        </div>
                        <div className='w-10 h-10 rounded-full inline-block mx-1 pt-1 bg-orange-500 hover:bg-orange-600'>
                            <i className='cursor-pointer fab fa-google-plus-g'></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;