import { FaCcAmex, FaCcDiscover, FaCcMastercard, FaFacebook, FaPaypal, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <a href="#">
                                    <img className="w-auto h-7" src={"/public/images.png"} alt="" />

                                </a>

                                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                                BdCoinsPay.com is a user-friendly e-commerce platform specializing in digital products, cryptocurrency payment solutions, and seamless online transactions. It offers a secure and efficient shopping experience, catering to modern tech-savvy consumers in Bangladesh and beyond.</p>

                                <div className="flex mt-6 -mx-2">
                                    <a href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Reddit">
                                       <FaFacebook />
                                    </a>

                                    <a href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Facebook">
                                       <FaWhatsapp />
                                    </a>

                                    <a href="#"
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label="Github">
                                    <FaXTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
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
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                                </div>

                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
                    <div>
                        <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;