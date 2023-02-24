import React from 'react'

import './buttons.css'

export default function Buttons() {
  return (
    <div className="buttons">

        <div className="btns-container">
            <div className="btns-custom-order">
                <div className="btns-custom-order-btn btn">
                    <p className="btns-custom-order-btn-p">Custom Order</p>
                </div>
            </div>
            <div className="btns-demo-drive">
                <div className="btns-demo-drive-btn btn">
                    <p>Demo Drive</p>
                </div>
            </div>
        </div>

        <div className="arrow-container">
            <div className="arrow">^</div>
        </div>
    </div>
  )
}
