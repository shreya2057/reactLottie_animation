'use client'
import dynamic from "next/dynamic";
const Lottie  = dynamic(()=>import("lottie-react"),{ssr:false});
import Hover from "./hover.json";
import {useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

export default function Animation(){
    const ref = useRef<LottieRefCurrentProps>(null)

    return (
        <div className="">
            <Lottie
                onMouseEnter={()=>{
                    ref.current?.playSegments([1,13], true)
                }}
                onMouseLeave={()=>{
                    ref.current?.play()
                    ref.current?.setDirection(-1)
                }}
                lottieRef={ref}
                loop={false}
                autoplay={false}
                className="flex h-96 justify-center items-center"
                animationData={Hover}
            />
        </div>
        
    );
};