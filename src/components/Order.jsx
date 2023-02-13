import React from 'react'

const Order = (props) => {
  return (
    <div className="text-center">
        <button id="HoverPurpose" className={`w-[200px] h-[50px] border rounded-full border-[#2a407c] mt-[40px] ${props.bg} `}>Order</button>
    </div>
  )
}

export default Order;