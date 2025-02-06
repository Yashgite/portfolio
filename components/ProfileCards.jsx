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
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";


const ProfileCards = () => {
    return (
        <>
            <Card className="w-[350px] mx-auto border-none">
                <CardHeader>
                    <Image
                    src="/yash.png"
                    className="object-cover w-80 h-80 rounded-2xl"
                    width={400}
                    height={200}
                    alt="an image"
                    priority
                    />
                </CardHeader>
                <CardContent>
                    <h1 className="text-xl mb-2 font-bold">Yash Gite</h1>
                    <p >Creative and detail-oriented Frontend Developer passionate
                    about crafting responsive, user-friendly interfaces with clean, 
                    efficient code.</p>
                </CardContent>
                <CardFooter className="text-start text-2xl flex justify-start">
                    <div className="flex space-x-3">
                        <Link href="https://www.linkedin.com/in/yash-gite"> <CiLinkedin /> </Link>
                        <Link href="https://github.com/Yashgite"><IoLogoGithub /></Link>
                        </div>
                </CardFooter>
            </Card>

        </>
    )
}

export default ProfileCards