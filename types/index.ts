import { MouseEventHandler } from "react";


export interface HeroProps {
  appName?: string;
  tagLine?: string;
  description?: string;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}



export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
