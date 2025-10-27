import React from "react";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-3">
        Welcome to MeraPopi Digital Seva Center. By using our website and services, 
        you agree to comply with and be bound by the following terms and conditions.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>All information submitted must be true and verifiable.</li>
        <li>Services are provided on best-effort basis as per government portal availability.</li>
        <li>Fees once paid are non-refundable unless specified under refund policy.</li>
      </ul>
      <p className="mt-4">If you have any questions, contact us at support@merapopi.in.</p>
    </div>
  );
}
