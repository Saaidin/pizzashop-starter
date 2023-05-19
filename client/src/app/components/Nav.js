"use client"

import { useContext } from "react"
// import next image
import Image from "next/image"
// import next link
import Link from "next/link"
// context
import { CartContext } from "../context/CartContext"

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)

  return (
    <nav className="absolute w-full py-8 mb-10 sm:mb-0">
      <div className="container mx-auto flex flex-col sm:flex-row gap-y-3 justify-between items-center">
        {/* logo */}
        <Link href="/" className="max-w-[160px] sm:max-w-max">
          <Image
            src={"logo.svg"}
            width={160}
            height={90}
            alt=""
            priority
            className="aspect-video"
          />
        </Link>
        {/* phone & cart */}
        <div className="flex gap-x-8 items-center">
          {/* phone */}
          <div className="flex gap-x-3 items-center">
            <Image
              src={"phone.svg"}
              width={50}
              height={50}
              alt=""
              priority
              className="aspect-square"
            />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide">
                012 345 6789
              </div>
            </div>
          </div>
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden sm:flex"
          >
            <Image src={"bag.svg"} width={38} height={38} alt="" />
            {/* amount */}
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
