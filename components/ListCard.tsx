
"use client";
import Image from "next/image";

import { GridListProps } from "@/types";

const ListCard = ({ url, image, title, description, handleClick }: GridListProps) => (
    <div
        className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
        <a href={url} className="cursor-pointer">
            <figure>
                <div
                    className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                    <img src={image}
                        className="h-[250px] w-full col-span-1 " />

                    <figcaption className="p-4 col-span-3">
                        <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                            {title}
                        </p>
                        <small className="leading-5 text-gray-500 dark:text-gray-400">
                            {description}
                        </small>
                    </figcaption>
                </div>
            </figure>
        </a>
    </div>

);

export default ListCard;