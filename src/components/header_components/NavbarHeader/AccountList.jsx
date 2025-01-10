import React from "react";

const siteOptions = [
  { id: "create-wish-list", name: "Create a Wish List" },
  { id: "wish-from-any-website", name: "Wish from Any Website" },
  { id: "baby-wishlist", name: "Baby Wishlist" },
  { id: "discover-your-style", name: "Discover Your Style" },
  { id: "explore-showroom", name: "Explore Showroom" },
];

const accountOptions = [
  { id: "your-orders", name: "Your Orders" },
  { id: "your-wish-list", name: "Your Wish List" },
  { id: "your-recommendations", name: "Your Recommendations" },
  { id: "your-prime-membership", name: "Your Prime Membership" },
  { id: "your-prime-video", name: "Your Prime Video" },
  { id: "your-subscribe-save-items", name: "Your Subscribe & Save Items" },
  { id: "memberships-subscriptions", name: "Memberships & Subscriptions" },
  { id: "your-seller-account", name: "Your Seller Account" },
  { id: "manage-content-devices", name: "Manage Your Content and Devices" },
  {
    id: "register-business-account",
    name: "Register for a free Business Account",
  },
];

const AccountCard = () => {
  return (
    <>
      <div className="flex flex-col items-center my-6 bg-white rounded-lg p-8 ">
        <button
          type="button"
          className="w-64 text-black bg-yellow-400 font-medium rounded-lg text-sm px-5 py-1 -mb-2 -mt-14 dark:focus:ring-yellow-900"
        >
          Sign In
        </button>
        <p className="text-xs my-4">
          New customer?
          <a href="#" className="text-blue-500 underline ml-1">
            Start here.
          </a>
        </p>
      </div>
      <p className="border-b-[1px] border-b-gray-300 -mt-14"></p>

      <div className="flex justify-between my-4">
        {/*Lists Section */}
        <div className="flex-1 mr-8">
          <h3 className="font-bold text-sm ">Your Lists</h3>
          <ul className="text-sm text-gray-600">
            {siteOptions.map((option) => (
              <li key={option.id} className="text-xs font-sans py-1">
                <a href="#" className="text-gray-600 hover:underline">
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical Line */}
        <div className="border-l-[1px] border-l-gray-300"></div>

        {/*Account Section */}
        <div className="flex-1 ml-8">
          <h3 className="font-bold text-sm ">Your Account</h3>
          <ul className="text-sm text-gray-600">
            {accountOptions.map((option) => (
              <li key={option.id} className="text-xs font-sans py-1">
                <a href="#" className="text-gray-600 hover:underline">
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
