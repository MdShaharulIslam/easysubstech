import { FaCcAmex, FaCcDiscover, FaCcMastercard, FaFacebook, FaPaypal, FaWhatsapp } from "react-icons/fa";

import { RiVisaFill } from "react-icons/ri";
import fimg from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <a href="#">
                                    <img className="w-auto h-12 rounded-full" src={fimg} alt="" />

                                </a>

                                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                                Yousuf Abdullah LLC, owned by Syed Yousuf Abdullah Harun, operates in the e-commerce sector, leveraging online platforms to facilitate sales and services. The company is part of a broader business network, with Harun being a prominent figure in various industries, including insurance and trade.</p>

                                <div className="flex mt-6 -mx-2">
                                    <a href="https://www.facebook.com/bdpointsgameshop?mibextid=ZbWKwL"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Reddit">
                                            <a href="https://www.facebook.com/yousufarjulove"><FaFacebook  /></a>
                                       
                                    </a>

                                    <a href="https://wa.me/8801747677507"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Facebook">
                                            
                                       <FaWhatsapp />
                                    </a>

                                   
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                    <Link to="/TermsAndConditions">
                                     <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tearms & Condition</a>
                                    </Link>
                                    <Link to="/ReturnPolice">
                                     <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Privecy Policy & Refund</a>
                                    </Link>
                                   
                                    
                                    
                                </div>

                                <div >
                                    <h3 className="text-gray-700 uppercase dark:text-white">Pay method</h3>
                                  <div className="text-2xl">
                                  <div className="flex gap-3">
                                   <RiVisaFill/>
                                    <FaCcMastercard />
                                    <FaCcDiscover />
                                    
                                   </div>
                                   <div className="flex gap-3 mt-3">
                                   <FaCcAmex />
                                    <FaPaypal />
                                    
                                   </div>
                                  </div>

                                    
                                    
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Laptop</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">LED Display</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Bluetooth Speaker</a>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">easysubstech@gmail.com</span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">info@easysubstech.com</span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">pay@easysubstech.com</span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">payment@easysubstech.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
                    <div>
                        <p className="text-center text-gray-500 dark:text-gray-400">© SS Brand 2024 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;