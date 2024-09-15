import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    header: "flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4",
    nav: "max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between",
    items: "flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:ps-5 sm:pb-0 sm:overflow-x-visible [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
    item: "font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400",
  },
});
