"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const Button = ({ isDisabled, isSpan, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`${containerStyles}`}
    onClick={handleClick}
  >
    {isSpan ? (<span className={`custom-text-style ${textStyles}`}>{title}</span>) : title}
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;
