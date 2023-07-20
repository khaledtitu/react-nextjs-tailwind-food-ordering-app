
"use client";
import Image from "next/image";

import { GridListProps } from "@/types";

const GridCard = ({ url, image, title, description, handleClick }: GridListProps) => (

<div
    className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
    <a href={url} className="cursor-pointer">
        <figure>
            <img 
                src={image}
                className="rounded-t h-72 w-full object-cover" 
            />
            <figcaption className="p-4">
                <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                    {title}
                </p>
                <small className="leading-5 text-gray-500 dark:text-gray-400">
                    {description}
                </small>
            </figcaption>
        </figure>
    </a>
</div>
);

export default GridCard;