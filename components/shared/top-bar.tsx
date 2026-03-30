import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { SortPopup } from "./sort-popup";
import { Categories } from "./categories";
import { Category } from "@prisma/client";
import { categories } from "@/prisma/constants";

interface Props {
    categories: Category[]
    classname?: string;
}

export const TopBar: React.FC<Props> = ({ categories,classname }) => {
    return (
        <div className={cn('sticky top-0 z-10 bg-white shadow-lg shadow-black/6', classname)}>
            <Container className="flext items-center justify-between">
            <Categories items={categories}/>
            <SortPopup classname="ml-20"/>
            </Container>
        </div>
    );
}; 