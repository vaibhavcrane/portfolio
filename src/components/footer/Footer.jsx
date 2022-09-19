import React from "react";
import Social from "../Social";

const Footer = () => {
	return (
		<>
			<div className='shane_tm_section'>
				<div className='shane_tm_copyright'>
					<div className='container'>
						<div className='inner'>
							<div className='footer-socials'>
								<Social />
							</div>
						</div>
						{/* End content */}
					</div>
				</div>
				{/* End inner */}
			</div>
		</>
	);
};

export default Footer;
