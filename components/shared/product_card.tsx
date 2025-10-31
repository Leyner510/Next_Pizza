import Link from "next/link";
import React from "react";

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl?: string
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
    return (
        <div className={className}>
                <Link href={`/product/${id}`}>
                    <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                        <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo"/>

                    </div>
                </Link>
        </div>
    )
}