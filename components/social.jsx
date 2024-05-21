import React from "react";

const SocialShare = [
	{ iconName: "linkedin", link: "https://linkedin.com/in/vaibhavcrane" },
	{ iconName: "github", link: "https://github.com/vaibhavcrane" },
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
			<ul className='social social-default'>
				{SocialShare.map((val, i) => (
					<li key={i}>
						<a href={`${val.link}`} target='_blank' rel='noreferrer'>
							<img
								className='svg'
								src={`/img/svg/social/${val.iconName}.svg`}
								alt='social'
							/>
						</a>
					</li>
				))}
			</ul>

			{/* END social */}
		</div>
	);
};

export default Social;
