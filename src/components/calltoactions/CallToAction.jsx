import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const CallToAction = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleModalOne() {
		setIsOpen(!isOpen);
	}

	return (
		<div className='shane_tm_section' id='contact'>
			<div
				className='shane_tm_talk bg_image_props'
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + "img/callto-action/1.jpg"
					})`,
				}}>
				<div className='shape'>
					<img className='svg' src='/img/svg/paper.svg' alt='partners brand' />
				</div>
				{/* End shape */}

				<div className='background' id='talk'>
					<a className='player'></a>
					<div className='overlay'></div>
				</div>
				{/* End background */}

				<div className='talk_inner'>
					<div className='socials'>
						<Social />
					</div>
				</div>
				{/* End content */}
			</div>
		</div>
	);
};

export default CallToAction;
