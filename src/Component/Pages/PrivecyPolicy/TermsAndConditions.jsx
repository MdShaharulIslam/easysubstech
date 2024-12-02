

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Header Section */}
      <header className="bg-blue-600 w-full py-6 text-white text-center shadow-lg">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <p className="text-lg mt-2">Please read our terms and conditions carefully before using our services.</p>
      </header>

      {/* Main Content Section */}
      <main className="w-full max-w-4xl px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Introduction</h2>
          <p className="text-gray-700">
            Welcome to Easy Subs Tech, a platform that connects users to various services. By accessing or using our services, 
            you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, 
            please refrain from using our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700">
            By using our services, you acknowledge and agree to these terms. You must be at least 18 years old to access or use 
            our services. If you are under the age of 18, please ensure that you use our services only with the involvement of a parent 
            or guardian.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">User Responsibilities</h2>
          <p className="text-gray-700">
            As a user, you are responsible for ensuring that any content you submit or upload to our platform complies with all applicable 
            laws and regulations. You must also ensure that any information you provide is accurate and up-to-date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Prohibited Activities</h2>
          <p className="text-gray-700">
            You may not use our services for any unlawful purpose or in any way that may damage, disable, or impair the functioning 
            of the platform. Any form of harassment, spamming, or distribution of malicious software is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Payment and Refunds</h2>
          <p className="text-gray-700">
            Any payments made for services are non-refundable except as provided under specific circumstances defined by the service 
            agreement. Please review the pricing and refund policies before completing any transactions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Termination</h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate your access to our services at any time, without notice, if we believe 
            you have violated these terms or engaged in any behavior detrimental to the platform or other users.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700">
            Our liability is limited to the fullest extent permitted by law. We are not responsible for any damages or losses resulting 
            from the use or inability to use our services. We do not guarantee uninterrupted access or error-free services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on our website. 
            We encourage you to review this page periodically to stay informed about any updates.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these terms and conditions, feel free to contact us at info@easysubstech.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
