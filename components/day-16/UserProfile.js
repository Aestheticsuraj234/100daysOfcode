import React, { useState } from "react";

const UserProfile = () => {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <>
      <button
        onClick={togglePopover}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        User profile
      </button>
      {showPopover && (
        <div
          role="tooltip"
          className="absolute bottom-10 z-10 inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="p-3">
            <div class="p-3">
              <div class="flex items-center justify-between mb-2">
                <a href="#">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="/avatar.png"
                    alt="Jese Leos"
                  />
                </a>
                <div>
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Follow
                  </button>
                </div>
              </div>
              <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                <a href="#">Jese Leos</a>
              </p>
              <p class="mb-3 text-sm font-normal">
                <a href="#" class="hover:underline">
                  @jeseleos
                </a>
              </p>
              <p class="mb-4 text-sm font-light">
                Open-source contributor. Building{" "}
                <a
                  href="#"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  flowbite.com
                </a>
                .
              </p>
              <ul class="flex text-sm font-light">
                <li class="mr-2">
                  <a href="#" class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white">
                      799
                    </span>
                    <span>Following</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white">
                      3,758
                    </span>
                    <span>Followers</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
