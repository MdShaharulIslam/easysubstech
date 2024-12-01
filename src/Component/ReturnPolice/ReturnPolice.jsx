const ReturnPolice = () => {
    return (
        <div className="">
            <div className=" mx-auto p-6 w-full bg-gray-50 rounded-lg shadow-md">
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
                        1. Contact us at [Support Email] with your order details and reason
                        for requesting a refund.
                        <br />
                        2. Our team will review your request and notify you of the approval
                        or rejection of your refund within 5 business days.
                        <br />
                        3. If approved, your refund will be processed and credited to your
                        original payment method within 10 business days.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        Contact Us
                    </h2>
                    <p className="text-gray-600">
                        For questions about our Refund Policy, reach out to us at [Support
                        Email] or [Phone Number].
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ReturnPolice;