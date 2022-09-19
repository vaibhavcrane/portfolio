import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["All", "Design", "Branding", "Photography"];

const tabListContent = [
	{
		porftoliItems: [
			{
				img: "1",
				title: " My Story",
				meta: "Design",
				portfolioLink: "https://www.instagram.com/",
			},
			{
				img: "2",
				title: "Design Trend",
				meta: "Branding",
				portfolioLink:
					"https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
			},
			{
				img: "14",
				title: "Soft Cream",
				meta: "Photography",
				portfolioLink:
					"https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
			},
			{
				img: "22",
				title: "Shane Design",
				meta: "Design",
				portfolioLink:
					"https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
			},
			{
				img: "7",
				title: " Sweet Cherry",
				meta: "Photography",
				portfolioLink:
					"https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
			},
			{
				img: "3",
				title: "Behance Shoot",
				meta: "Branding",
				portfolioLink: "https://www.behance.net/ib-themes",
			},
		],
	},
	{
		porftoliItems: [
			{
				img: "22",
				title: "Shane Design",
				meta: "Design",
				portfolioLink:
					"https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
			},
			{
				img: "7",
				title: " Sweet Cherry",
				meta: "Photography",
				portfolioLink:
					"https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
			},
		],
	},
	{
		porftoliItems: [
			{
				img: "1",
				title: " My Story",
				meta: "Design",
				portfolioLink: "https://www.instagram.com/",
			},
			{
				img: "2",
				title: "Design Trend",
				meta: "Branding",
				portfolioLink:
					"https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
			},
		],
	},
	{
		porftoliItems: [
			{
				img: "7",
				title: " Sweet Cherry",
				meta: "Photography",
				portfolioLink:
					"https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
			},
			{
				img: "15",
				title: "Soft Cream",
				meta: "Photography",
				portfolioLink:
					"https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
			},
		],
	},
];

const Portfolio = () => {
	return (
		<div className='shane_tm_section' id='portfolio'>
			<SimpleReactLightbox>
				<div className='shane_tm_portfolio'>
					<div className='container'>
						<div className='positon-relative'>
							<div className='shane_tm_title'>
								<div className='title_flex'>
									<div className='left'>
										<span>Portfolio</span>
										<h3>Creative Portfolio</h3>
									</div>
								</div>
							</div>
							{/* End shane_tm_title */}

							<div className='portfolio_filter'>
								<Tabs>
									<TabList>
										{tabList.map((val, i) => (
											<Tab key={i}>{val}</Tab>
										))}
									</TabList>
									{/* End tablist */}

									<div className='portfolio_list has-effect'>
										<SRLWrapper>
											{tabListContent.map((tabContent, i) => (
												<TabPanel key={i}>
													<ul className='gallery_zoom'>
														{tabContent.porftoliItems.map((item, i) => (
															<li key={i}>
																<div className='inner'>
																	<div className='entry shane_tm_portfolio_animation_wrap'>
																		<a href={`/img/portfolio/${item.img}.jpg`}>
																			<img
																				src={`/img/portfolio/${item.img}.jpg`}
																				alt={item.meta}
																			/>
																		</a>
																	</div>
																	<div className='mobile_title'>
																		<h3>
																			<a
																				href={item.portfolioLink}
																				rel='noopener noreferrer'
																				target='_blank'>
																				{item.title}
																			</a>
																		</h3>
																		<span>{item.meta}</span>
																	</div>
																</div>
															</li>
														))}
													</ul>
												</TabPanel>
											))}
										</SRLWrapper>
										{/* End tabpanel */}
									</div>
									{/* End list wrapper */}
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</SimpleReactLightbox>
		</div>
	);
};

export default Portfolio;
