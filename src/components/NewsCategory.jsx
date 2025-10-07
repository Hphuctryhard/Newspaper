import { NewItemsWithImage } from "./NewItemsWithImage";
export default function NewsCategory() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-between mb-[40px]">
        <p className="text-[32px]"> Category news</p>
        <p className="flex flex-row text-[16px] items-center">
          See all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </div>
      <img className="w-[400px] h-[400px]  mb-[40px]"></img>
      <p className="text-left text-[24px] leading-[32px] mb-[20px] ">
        Title of news
      </p>
      <div className="space-y-5">
        <NewItemsWithImage />
        <NewItemsWithImage />
        <NewItemsWithImage />
      </div>
    </div>
  );
}
