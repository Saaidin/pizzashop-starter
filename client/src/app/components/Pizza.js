"use client"

import { useState } from "react"
import Image from "next/image"
// modal
import Modal from "react-modal"
// components
import PizzaDetails from "./PizzaDetails"
// icons
import { IoCloseOutline } from "react-icons/io5"
// bind modal to body
Modal.setAppElement("body")
// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}

const Pizza = ({ pizza }) => {
  // modal state
  const [modal, setModal] = useState(false)
  // open modal
  const openModal = () => {
    setModal(true)
  }
  // close modal
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image
        onClick={openModal}
        className="sm:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        src={pizza.image}
        width={270}
        height={270}
        alt={pizza.name}
        priority={1}
      />
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6 bg-pink-200">
        {pizza.description}
      </div>
      {/* price & btn */}
      <div className="mb-6 flex items-center justify-between">
        {/* price -> hidden (sm-640px) - visible (md-768px) */}
        <div className="hidden md:flex text-xl font-semibold">
          starts at ${pizza.priceSm}
        </div>
        {/* btn -> hidden (sm-640px) - visible (md-768px) */}
        <button
          onClick={openModal}
          className="hidden md:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        {/* btn -> visible (sm-640px) - hidden (md-768px) */}
        <button
          onClick={openModal}
          className="btn btn-sm gradient md:hidden text-sm px-3"
        >
          starts at {pizza.priceSm}
        </button>
      </div>
      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className="bg-white w-full h-full sm:max-w-[900px] sm:max-h-[600px] sm:rounded-[30px] sm:fixed sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] outline-none"
        >
          {/* close modal icon */}
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          {/* pizza details */}
          <PizzaDetails />
        </Modal>
      )}
    </div>
  )
}
export default Pizza
