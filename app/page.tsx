'use client';
import { useState } from "react";
import { Hero, CustomButton } from "@/components";

const ButtonStyle = "text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";


export default function Home() {
  const [isGridViewVisible, setGridViewVisible] = useState(true);
  const [isListViewVisible, setListViewVisible] = useState(false);

  const toggleView = (viewType: 'gridDiv' | 'listDiv') => {
    if (viewType === 'gridDiv') {
      setGridViewVisible(true);
      setListViewVisible(false);
    } else {
      setGridViewVisible(false);
      setListViewVisible(true);
    }
  };

  return (
    <main className='overflow-hidden'>
      <Hero 
        appType = 'Food ordering System '
        tagLine='The food you love are all here just need to few clicks to make it happend  '
        description= 'Search Our All foods '

      />
      <div className="container mx-auto px-20 pt-20 pb-20">
        <form>   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Vurger, pizza etc..." required />
                <CustomButton
                  title="Search"
                  containerStyles={ButtonStyle}
                  isSpan="true"
                />
            </div>
        </form>
      </div>

      <div className="container mx-auto py-6">
        <div className="px-10">
            <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
                <button onClick={() => toggleView('gridDiv')}
                    className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 toogle-button active"
                    id="grid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="fill-current w-4 h-4 mr-2">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                    <span>Grid</span>
                </button>
                <button onClick={() => toggleView('listDiv')}
                    className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2 toogle-button"
                    id="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="fill-current w-4 h-4 mr-2">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                    <span>List</span>
                </button>
            </div>
        </div>
        {isGridViewVisible? (
            <div className="px-10" id="gridDiv">
              <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
                      <div
                          className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
                          <a href="/" className="cursor-pointer">
                              <figure>
                                  <img src="https://flowbite.com/docs/images/blog/image-4.jpg"
                                      className="rounded-t h-72 w-full object-cover" />
                                  <figcaption className="p-4">
                                      <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                                          Noteworthy technology acquisitions 2021
                                      </p>
                                      <small className="leading-5 text-gray-500 dark:text-gray-400">
                                          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                      </small>
                                  </figcaption>
                              </figure>
                          </a>
                      </div>
              </div>
          </div>
        ): ""}

      {isListViewVisible? (
          <div className="px-10" id="listDiv">
                <div
                    className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                        <div
                            className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
                            <a href="/" className="cursor-pointer">
                                <figure>
                                    <div
                                        className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                                        <img src="https://flowbite.com/docs/images/blog/image-4.jpg"
                                            className="h-[250px] w-full col-span-1 " />
    
                                        <figcaption className="p-4 col-span-3">
                                            <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                                                text
                                            </p>
                                            <small className="leading-5 text-gray-500 dark:text-gray-400">
                                                Description 
                                            </small>
                                        </figcaption>
                                    </div>
                                </figure>
                            </a>
                      </div>
                </div>
            </div>
            
      ) : ""}


    </div>

    </main>
  );
}
