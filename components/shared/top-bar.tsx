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
        <div className={cn('sticky top-0 z-10 bg-white shadow-lg shadow-black/6', classname)}>
            <Container className="flext items-center justify-between">
            <Categories />
            <SortPopup classname="ml-20"/>
            </Container>
        </div>
    );
}; 