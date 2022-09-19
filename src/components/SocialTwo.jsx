import React from "react";

const SocialShare = [
	{ iconName: "twitter", link: "https://twitter.com/vaibhavcrane" },
	{
		iconName: "instagram",
		link: "https://www.instagram.com/vaibhavcrane",
	},
	{ iconName: "youtube", link: "https://youtube.com/vaibhav0820" },
];
const Social = () => {
	return (
		<div className='share'>
			<span>Share:</span>
			<ul className='social'>
				{SocialShare.map((val, i) => (
					<li key={i}>
						<a href={`${val.link}`} target='_blank' rel='noreferrer'>
							<img
								className='svg'
								src={`/img/svg/social/${val.iconName}.svg`}
								alt='social'></img>
						</a>
					</li>
				))}
			</ul>

			{/* END social */}
		</div>
	);
};

export default Social;
