import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { SortPopup } from "./sort-popup";
import { Categories } from "./categories";

interface Props {
    classname?: string;
}

export const TopBar: React.FC<Props> = ({ classname }) => {
    return (
        <div className={cn('sticky top-0 bg-gray shadow-lg shadow-black/5 z-10', classname)}>
            <Container/>
            <Categories />
            <SortPopup classname="ml-20"/>
        </div>
    );
}; 