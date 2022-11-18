import React from "react";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className='intro error_page'>
			<div
				className='hero'
				style={{
					backgroundImage: `url(${"img/404/background.png"})`,
				}}>
				<div className='content'>
					<h1>404!</h1>
					<p>The page you are looking for could not be found.</p>

					<a className='white-fill-bg btn-outline' href={"/"}>
						BACK TO HOME
					</a>
					{/* End purchase_button */}
				</div>
			</div>
			{/* End .hero */}
		</div>
	);
};

export default NotFound;
