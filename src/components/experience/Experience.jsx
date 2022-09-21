import React from "react";

const Experience = () => {
	return (
		<>
			<div
				className='shane_tm_section'
				data-aos='fade-up'
				data-aos-duration='1200'>
				<div className='shane_tm_skills' id='experience'>
					<div className='container'>
						<div className='skills_inner'>
							<div className='left'>
								<div className='shane_tm_title'>
									<span>My Experience</span>
									<h3>
										I am an Operations professional with three years of
										experience
									</h3>
								</div>
							</div>
							{/* End .left */}

							<div className='right'>
								<div className='tokyo_progress'>
									<div className='progress_inner'>
										<span>
											<span className='label'>Operations Manager</span>
											<span className='number'>Aug 2019 - Jul 2020</span>
										</span>
										<div className='company-text'>
											<p>Spectrum Electrical Insureties Limited</p>
										</div>
										<div className='text'>
											<p>
												At Spectrum, I oversaw day to day operations of the
												plant as well as led projects to increase production
												capacity
											</p>
										</div>
									</div>
									<br />

									<div className='progress_inner'>
										<span>
											<span className='label'>Sales Officer</span>
											<span className='number'>May 2019 - Jul 2019</span>
										</span>
										<div className='company-text'>
											<p>Indian Oil Corporation Limited</p>
										</div>
										<div className='text'>
											<p>
												I managed the sales of petroleum products at 60 retail
												outlets and implemented 4 different porjects across all
												the sites
											</p>
										</div>
									</div>
									<br />
									<div className='progress_inner'>
										<span>
											<span className='label'>Operations Officer</span>
											<span className='number'>Aug 2017 - May 2019</span>
										</span>
										<div className='company-text'>
											<p>Indian Oil Corporation Limited</p>
										</div>
										<div className='text'>
											<p>
												I worked on increasing the efficiency of the plant while
												maintaining high safety standards
											</p>
										</div>
									</div>
									<br />
								</div>
							</div>
							{/* End .right */}
						</div>
					</div>
					{/* End .conainer */}
				</div>
			</div>
		</>
	);
};

export default Experience;
