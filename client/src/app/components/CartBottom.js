import { useContext, useState } from "react"
// icons
import { IoCloseOutline } from "react-icons/io5"
// components
import CheckoutDetails from "./CheckoutDetails"
// modal
import Modal from "react-modal"
// context
import { CartContext } from "../context/CartContext"

// modal styles
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}

// bind modal to body
Modal.setAppElement("body")

const CartBottom = () => {
  const { setIsOpen, cart } = useContext(CartContext)
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
    <>
      {cart.length >= 1 ? (
        <div className="px-6 py-3 sm:py-6 mt-auto">
          {/* total price */}
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
            <div>Total:</div>
            <div>$320:</div>
          </div>
          {/* btn */}
          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setIsOpen(false), openModal(true)
              }}
              className="btn btn-lg gradient font-semibold flex justify-center"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full h-full flex justify-center items-center -z-10">
          <div className="font-semibold">Your cart is empty</div>
        </div>
      )}
      {/* checkout modal */}
      {modal && (
        <Modal
          isOpen={modal}
          styles={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
        >
          modal
        </Modal>
      )}
    </>
  )
}

export default CartBottom
