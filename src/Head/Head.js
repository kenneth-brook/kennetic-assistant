import React from "react";

export default function Head() {
	return (
		<header className='headWrap'>
			<div className='blockAndStripeWrap'>
				<div className='block'></div>
				<div className='stripeWrap'>
					<div className='stripe1'></div>
					<div className='stripe2'></div>
					<div className='stripe3'></div>
					<div className='stripe4'></div>
				</div>
			</div>
			<div className='titleWrap'>
				<div className='title1Wrap'>
					<h1 className='title1'>Kennetic</h1>
				</div>
				<div className='title2Wrap'>
					<h1 className='title2'>Assistant</h1>
				</div>
			</div>
		</header>
	);
}
