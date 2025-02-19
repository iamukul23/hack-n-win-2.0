'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "./ThemeProvider";

export default function HeroSectionBread() {
    const { theme } = useTheme();
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <div className="h-[360px] dark:text-squidPink text-black dark:border-squidTeal border-squidPink 
              backdrop-blur-md flex items-center justify-center 
             shadow-lg dark:shadow-squidPink/15 shadow-squidTeal/10">
            <div className="flex md:flex-row w-[100%] justify-between items-center p-5 flex-col gap-5">
                <div className="flex flex-col">
                    <h1 className="text-[32px] text-squidPink font-bold md:text-start text-center">Hack-N-Win 2.0 | D4 Community</h1>
                    <p className="font-small dark:text-gray-200 text-black md:text-start text-center">Hack-N-Win 2.0 <span className="text-squidPink w-[500px]"> {usePathname().toUpperCase()}</span></p>
                </div>
                <div>
                    <Image
                        src={theme === "dark" ? "/hero-logo-white.png" : "/hero-logo-black.png"}
                        alt="Hack-n-Win 2.0"
                        width={isSmallScreen ? 300 : 390}
                        height={isSmallScreen ? 100 : 150}
                        unoptimized
                        // className="md:block hidden"
                    />
                </div>
            </div>
        </div>
    )
}