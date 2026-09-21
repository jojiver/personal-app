import React from "react";
import { cn } from "@/lib/cn";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {

    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary" | "danger";
}