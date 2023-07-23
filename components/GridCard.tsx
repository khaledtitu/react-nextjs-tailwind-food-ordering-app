
"use client";
import { Food } from "@/types";
const GridCard = ({foodCategory }: Object) => (

<div className="px-10" id="gridDiv">
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 ">
        {foodCategory.map((food: Food) => (
            <div key={food._id} className="grid-list-card">
                <a href={food.url} className="cursor-pointer">
                    <figure>
                        <img 
                            src={food.img_menu}
                            className="rounded-t h-72 w-full object-cover" 
                        />
                        <figcaption className="p-4">
                            <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                                {food.title}
                            </p>
                            <small className="leading-5 text-gray-500 dark:text-gray-400">
                                {food.description}
                            </small>
                        </figcaption>
                    </figure>
                </a>
            </div>
        ))}
    </div>
</div>
);

export default GridCard;