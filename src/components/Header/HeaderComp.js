import React from 'react'

import"./headerComp.css"

export default function HeaderComp(props) {

	const displayItemsFromArray = (arrayItems) =>{
		return arrayItems.map( (Arrayitem) =>
			<p>{Arrayitem}</p>
		)
	}

  return (
    <div className="hc-container">
		<div className="hc-logo-container">
			<img src={props.logoUrl} alt="" srcset=""  height="15px"/>
		</div>

		<div className="hc-model-container">
			{displayItemsFromArray(props.modelArray)}
		</div>

		<div className="hc-options-container">
			{displayItemsFromArray(props.optionArray)}
		</div>
    </div>
  )
}
