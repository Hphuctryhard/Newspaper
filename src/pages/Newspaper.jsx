import React, { useState } from "react";
import { NewItemsWithImage } from "../components/NewItemsWithImage";
import { NewItems } from "../components/NewItems";
import Carousel from "../components/Carousel";
import NewsCategory from "../components/NewsCategory";
import VideoItem from "../components/VideoItem";
import FooterComponent from "../components/FooterComponent";
import NewsItemsInVertical from "../components/NewsItemsInVertical";
export default function NewspaperPage() {
  const [category, Setcategory] = useState([
    "Heathcare",
    "Nutrition",
    "Mental Health",
    "Blood Information",
  ]);
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="h-[1400px] w-screen bg-black text-white flex flex-col">
        <header
          className="flex flex-row w-screen h-[64px] top-0 justify-between items-center p-10 "
          style={{ position: "absolute" }}>
          <p className="ml-2"> Newspaper</p>
          <ul className="flex flex-row " style={{ backgroundColor: "#000000" }}>
            <li>
              {category.map((item) => (
                <button
                  style={{ backgroundColor: "#000000" }}
                  key={item}
                  onClick={() => Setcategory(item)}>
                  {item}
                </button>
              ))}
            </li>
          </ul>
          <div className="flex flex-row">
            <button
              style={{
                backgroundColor: "#000000",
                border: "2px solid #FFFFFF",
                borderRadius: "20px",
              }}
              className="flex flex-row p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              Search
            </button>
          </div>
        </header>
        <div className="flex flex-col  mx-[50px] h-[878px] mt-[112px] gap-[80px] ">
          <div className=" flex flex-row w-full justify-between ">
            <div className="w-2/3 h-[596px]">
              <div className="w-1/2 flex flex-col justify-between h-full">
                <h1
                  className=" mt-4 text-justify mb-[24px] "
                  style={{
                    fontSize: "72px",
                    lineHeight: "80px",
                  }}>
                  Russia’s Youngest-ever Astronauts Blast Off to Space Station
                </h1>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    textAlign: "left",
                    marginTop: "24px",
                  }}>
                  On Thursday, three Russian astronauts lifted off on the
                  Moscow-17 spacecraft from the Sputnik 1 Satellite Launch
                  Center deep in the Gobi Desert, heading for the Mir space
                  station for a six-month stay.
                </p>
                <p className="text-left ">
                  Category &nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp; Author &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  |&nbsp;&nbsp;&nbsp; Date
                </p>
              </div>
              <img className="w-1/2"></img>
            </div>
            <div className="w-1/3 space-y-5">
              <NewItemsWithImage />
              <NewItemsWithImage />
              <NewItemsWithImage />
              <NewItemsWithImage />
            </div>
          </div>
          <div className="mt-[60px] mb-[50px] flex flex-row space-x-[32px] items-center justify-around">
            <NewItems />
            <NewItems />
            <NewItems />
            <NewItems />
          </div>
        </div>
      </div>
      <div className="p-[40px] bg-white pb-[80px] h-[1000px]">
        <div className="flex flex-row justify-between mb-[40px]">
          <p className="text-[32px]"> Newest Stories</p>
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
        <Carousel />
      </div>
      <div className="p-[50px] border-t-2 border-neutral-200 bg-white pb-[80px] h-[814px]">
        <div className="flex flex-row justify-between mb-[40px]">
          <p className="text-[32px]"> Trendings news</p>
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
        <div className="flex flex-row h-[654px] gap-[40px] w-full ">
          <div className="w-2/3  overflow-hidden rounded-xl">
            <img src="/img.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/3">
            <h1 className="text-left mb-[48px]" style={{ fontSize: "48px" }}>
              {" "}
              Title of paper{" "}
            </h1>
            <article className="prose prose-zinc max-w-none md:columns-2 md:gap-10 [hyphens:auto]">
              <p
                className="!mt-0 text-justify first-letter:float-left first-letter:mr-3
                 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8]
                 first-letter:font-bold">
                An American company that organises visits to the International
                Space Station. Houston-based Axiom has signed a memorandum of
                understanding with the UK Space Agency to try to make it happen.
                The project would probably cost £200m or more, but the idea is
                that it would be funded commercially. There would be no
                contribution from UK taxpayers.
              </p>

              <p className="text-justify">
                Axiom told the BBC that conversations with corporations and
                institutions interested in providing finance were already under
                way.
              </p>

              <blockquote className="my-4 border-l-4 pl-4 text-zinc-700/90">
                “This is an exciting opportunity and actually unique,” he
                commented. “No-one has done a ‘national mission’, commercially,
                like this before.”
              </blockquote>

              <p className="text-justify">
                It’s a new model and would be paving the way for how we do space
                in the future. Details are sparse at the moment. No crew has
                been chosen, nor is there a concept yet for how it would be
                selected.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div
        id="NewsCategory"
        className="flex flex-row mx-[50px] mt-[50px] mb-[80px] justify-between">
        <NewsCategory />
        <NewsCategory />
        <NewsCategory />
      </div>
      <div
        id="viral-videos"
        className="flex flex-col bg-black text-white p-[50px]">
        <div className="flex flex-row justify-between mb-[40px]">
          <p className="text-[32px]"> Viral Videos</p>
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
        <div className="flex flex-row space-x-[80px] w-full h-[776px] ">
          <div className="w-3/3 flex flex-col">
            <iframe
              className="aspect-[4/2]"
              src="https://www.youtube.com/embed/mFq3UEqlHMw"
              title="What should we avoid after donating blood?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
            <div className="flex flex-row justify-between mt-5">
              <p>Tile of video</p>
              <p> Description of video</p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col space-y-30">
            <VideoItem>
              <iframe
                src="https://www.youtube.com/embed/J_03EXyhYS8"
                title="Why can&#39;t we stop eating certain foods? - BBC"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </VideoItem>
            <VideoItem>
              <iframe
                src="https://www.youtube.com/embed/GWGbOjlJDkU"
                title="Who are you?"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </VideoItem>
            <VideoItem>
              <iframe
                src="https://www.youtube.com/embed/5o-tRub-0pQ"
                title=""
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </VideoItem>
          </div>
        </div>
      </div>
      <div className="p-[40px]  w-full justify-items-center">
        <p className="mb-[40px] text-left ">Latest News Around the World</p>
        <div className="grid grid-cols-4 space-x-[100px] space-y-[80px] ">
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
          <NewsItemsInVertical />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
