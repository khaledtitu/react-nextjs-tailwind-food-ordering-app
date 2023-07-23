
"use client";
import Image from "next/image";

import { Food } from "@/types";

const ListCard = ({foodCategory }: Object) => (
<div className="px-10" id="listDiv">
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        {foodCategory.map((food: Food) => (
            <div key={food._id} className="grid-list-card">
                <a href={food.url} className="cursor-pointer">
                    <figure>
                        <div
                            className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                            <img src={food.img_menu}
                                className="h-[250px] w-full col-span-1 " />

                            <figcaption className="p-4 col-span-3">
                                <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                                    {food.title}
                                </p>
                                <small className="leading-5 text-gray-500 dark:text-gray-400">
                                    {food.description}
                                </small>
                            </figcaption>
                        </div>
                    </figure>
                </a>
            </div>
        ))}
    </div>
</div>

);

export default ListCard;