import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import Social from "./social";

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
	});

	return (
		<>
			<div className='topbar'>
				<div className={navbar ? "topbar_inner opened" : "topbar_inner"}>
					<div className='logo'>
						<img src='/img/logo/logo.png' alt='vr' />
					</div>
					{/* End logo */}
					<div className='menu'>
						<Scrollspy
							className='anchor_nav'
							items={["home", "about", "experience", "blog"]}
							currentClassName='current'
							offset={-200}>
							<li>
								<a href='#home'>Home</a>
							</li>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#experience'>Experience</a>
							</li>
							<li>
								<a href='#blog'>Blog</a>
							</li>
							<li>
								<a
									className='white-fill-bg btn-outline btn_sm'
									target='_blank'
									rel='noopener noreferrer'
									href='https://search.vaibhrane.me'>
									Try My Search
								</a>
							</li>
						</Scrollspy>
					</div>
					{/* End menu */}
				</div>
			</div>
			{/* End topbar */}

			{/* Start shane mobile menu */}
			<div className='mobile_menu'>
				<div className='topbar_inner'>
					<div className='container bigger'>
						<div className='topbar_in'>
							<div className='logo'>
								<img src='/img/logo/dark.png' alt='partners brand' />
							</div>
							{/* End logo */}
							<div className='my_trigger' onClick={handleClick}>
								<div
									className={
										click
											? "hamburger hamburger--collapse-r is-active"
											: "hamburger"
									}>
									<div className='hamburger-box'>
										<div className='hamburger-inner'></div>
									</div>
								</div>
								{/* End hamburger menu */}
							</div>
						</div>
					</div>
				</div>
				<div className={click ? "dropdown active" : "dropdown"}>
					<div className='container'>
						<span className='close_menu' onClick={handleClick}>
							close
						</span>
						<div className='dropdown_inner'>
							<ul className='anchor_nav'>
								<li className='current'>
									<a href='#home' onClick={handleClick}>
										Home
									</a>
								</li>
								<li>
									<a href='#about' onClick={handleClick}>
										About
									</a>
								</li>
								<li>
									<a href='#experience' onClick={handleClick}>
										Experience
									</a>
								</li>
								<li>
									<a href='#blog' onClick={handleClick}>
										Blog
									</a>
								</li>
								<li>
									<a
										className='white-fill-bg btn-outline btn_sm'
										target='_blank'
										rel='noreferrer'
										href='https://search.vaibhavrane.me'>
										Try My Search
									</a>
								</li>
							</ul>
							<div className='social-menu'>
								<Social />
							</div>
							{/* End social share */}
						</div>
					</div>
					{/* End container */}
				</div>
			</div>
			{/* End shane mobile menu */}
		</>
	);
};

export default Header;
