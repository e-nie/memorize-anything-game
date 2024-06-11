import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

import s from "./textField.module.scss";

// Fixed import path

export type TextFieldProps = {
  clearField?: () => void;
  errorMessage?: string;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type: "email" | "password" | "search" | "text";
} & ComponentPropsWithoutRef<"input">;

type PropsType = Omit<ComponentPropsWithoutRef<"input">, keyof TextFieldProps> &
  TextFieldProps;

export const TextField = forwardRef<HTMLInputElement, PropsType>(
  ({ clearField, errorMessage, label, rightIcon, type = "text", ...rest }) => {
    return (
      <div className={s.root}>
        <label className={s.label}>
          Input
          <div className={s.container}>
            <input type={"text"} {...rest} />
          </div>
        </label>
      </div>
    );
  },
);
