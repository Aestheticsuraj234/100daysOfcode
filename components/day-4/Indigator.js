import React from "react";

const Indigator = () => {
  return (
    <ul
      role="list"
      class="max-w-sm divide-y divide-gray-200 dark:divide-gray-700"
    >
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              src="dev-ed-wave.png"
              alt="Neil image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
              Neil Sims
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              email@flowbite.com
            </p>
          </div>
          <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            <span class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
            Available
          </span>
        </div>
      </li>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              src="/avatar.jpg"
              alt="Neil image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
              Bonnie Green
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              email@flowbite.com
            </p>
          </div>
          <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            <span class="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
            Unavailable
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Indigator;
