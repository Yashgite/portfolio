"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import React from 'react'
import tools from "@/data/tools.json"

const SmallCards = () => {
    return (
        <>
        {tools.map((t,i)=>(
            <div key={i}>
            <Card className="w-max items-center justify-around flex mx-auto ">
            <CardHeader>
                <Image
                src={t.img}
                className="object-cover w-16 h-16"
                width={500}
                height={300}
                alt="an image"
                />
            </CardHeader>
            <CardContent>
                <h1 className="text-xl mt-5 font-bold">{t.name}</h1>
            </CardContent>
        </Card>
        </div>
        ))}
            

        </>
    )
}

export default SmallCards