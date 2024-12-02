import React, { useState } from "react";

const ReturnPolicy = () => {
    const [activeTab, setActiveTab] = useState("refund");

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                    <button
                        className={`px-4 py-2 text-lg font-semibold rounded-l-lg ${activeTab === "refund"
                            ? "bg-gray-800 text-white"
                            : "bg-gray-200 text-gray-800"
                            }`}
                        onClick={() => setActiveTab("refund")}
                    >
                        Refund Policy
                    </button>
                    <button
                        className={`px-4 py-2 text-lg font-semibold rounded-r-lg ${activeTab === "privacy"
                            ? "bg-gray-800 text-white"
                            : "bg-gray-200 text-gray-800"
                            }`}
                        onClick={() => setActiveTab("privacy")}
                    >
                        Privacy Policy
                    </button>
                </div>

                {activeTab === "refund" && (
                    <div>
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                            Refund Policy
                        </h1>
                        <p className="text-center text-gray-600 mb-6">
                            Your satisfaction is our priority. Learn more about our refund terms.
                        </p>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
                            <p className="text-gray-600">
                                At [Your Website Name], customer satisfaction is our top priority. If
                                you are not fully satisfied with your purchase or experience, we are
                                here to help.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                Eligibility for Refunds
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>The request is made within 30 days of purchase.</li>
                                <li>
                                    The product or service did not meet its described quality or
                                    functionality.
                                </li>
                                <li>
                                    The issue was reported to our support team and could not be
                                    resolved.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                Non-Refundable Items
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>Products marked as non-refundable or final sale.</li>
                                <li>Digital downloads after successful delivery.</li>
                                <li>
                                    Subscriptions or services already used or partially fulfilled.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                Refund Process
                            </h2>
                            <p className="text-gray-600">
                                1. Contact us at 
                                <br />
                                
                                easysubstech@gmail.com 
                                <br />
                                info@easysubstech.com
                                <br />
                                pay@easysubstech.com
                                <br />
                                payment@easysubstech.com
                                <br /> with your order details and reason
                                for requesting a refund.
                                <br />
                                2. Our team will review your request and notify you of the approval
                                or rejection of your refund within 5 business days.
                                <br />
                                3. If approved, your refund will be processed and credited to your
                                original payment method within 10 business days.
                            </p>
                        </section>
                    </div>
                )}

                {activeTab === "privacy" && (
                    <div>
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-center text-gray-600 mb-6">
                            We value your privacy and are committed to protecting your personal information.
                        </p>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Information We Collect</h2>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>Personal details like name, email, and contact information.</li>
                                <li>Usage data, including pages visited and time spent on the site.</li>
                                <li>Payment details for transactions.</li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>To process orders and provide services.</li>
                                <li>To improve our website and user experience.</li>
                                <li>To communicate updates and promotional offers.</li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Third-Party Sharing</h2>
                            <p className="text-gray-600">
                                We do not share your information with third parties except to process payments
                                and comply with legal obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Contact Us</h2>
                            <p className="text-gray-600">
                                For questions about our Privacy Policy, contact us at easysubstech@gmail.com
                                <p>info@easysubstech.com</p>
                                <p>pay@easysubstech.com</p>
                                <p>payment@easysubstech.com</p>

                            </p>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReturnPolicy;
