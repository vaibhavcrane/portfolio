import React from "react";

const About = () => {
	return (
		<>
			<div className='shane_tm_section' id='about'>
				<div className='shane_tm_about'>
					<div className='container'>
						<div className='about_inner'>
							<div className='left'>
								<div
									className='image'
									data-aos='fade-up'
									data-aos-duration='1200'>
									<img src='/img/placeholders/1-1.jpg' alt='placeholder' />
									<div
										className='main'
										style={{
											backgroundImage: `url(${
												process.env.PUBLIC_URL + "img/about/about.jpg"
											})`,
										}}></div>
								</div>

								{/* End image */}
							</div>
							{/* End left */}

							<div className='right'>
								<div
									className='shane_tm_title'
									data-aos='fade-up'
									data-aos-duration='1200'>
									<span>About Me</span>
									<h3>Engineer. MBA. Problem Solver.</h3>
								</div>
								<div
									className='text'
									data-aos='fade-up'
									data-aos-duration='1200'>
									<p>
										I am a Schulich MBA graduate focused on innovation,
										strategy, marketing and operations with expertise in process
										optimization, project delivery and stakeholder management. I
										have experience in Oil and Gas industry with knowledge of
										SAP and automation.
									</p>
									<p>
										I like to solve problems and optimizing processes make
										things simpler. Nothing gives me more joy than to see my
										solutions benefit my customers and partners.
									</p>
									<p>
										I am intrigued by technology and the way it can be used our
										eveyday lives to make it simpler. I am an avid fan of
										Formula 1.
									</p>
								</div>
								<div
									className='shane_tm_button'
									data-aos='fade-up'
									data-aos-duration='1200'>
									<a href='img/resume/resume.pdf' download>
										Download Resume
									</a>
								</div>
							</div>
							{/* End right */}
						</div>
					</div>
					{/* End container */}
				</div>
			</div>
		</>
	);
};

export default About;
