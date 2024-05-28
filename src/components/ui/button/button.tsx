import { ComponentPropsWithoutRef, ElementType } from "react";

import clsx from "clsx";

import s from "./button.module.scss";
export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T>,
) => {
  const {
    as: Component = "button",
    className,
    fullWidth,
    variant = "primary",
    ...rest
  } = props;

  return (
    <Component
      // className={`${s.button} ${s[variant]} ${
      //   fullWidth ? s.fullWidth : ""
      // } ${className}`}
      className={clsx(
        s.button,
        s[variant],
        fullWidth && s.fullWidth,
        className,
      )}
      {...rest}
    />
  );
};
