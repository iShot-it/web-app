import React from "react";

const Premium = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Premium</h1>
        </div>

        <div className="space-y-6">
          <p className="text-lg">Upgrade to Premium.</p>

          <div>
            <p className="mb-2">Upgrade to premium version to enjoy:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Monetisation features</li>
              <li>Recording video up to 10minutes</li>
              <li>High resolution photo and video quality</li>
              <li>Download photos and videos to your device.</li>
            </ul>
          </div>

          <div>
            <p className="mb-2">Packages:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>$5/month</li>
              <li>$50/year</li>
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <button className="w-full bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
