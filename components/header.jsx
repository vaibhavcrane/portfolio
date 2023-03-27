import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy"; //TODO: deprecated. implement other library.
import Social from "./social";
import Link from "next/link";

//TODO: Redo animations

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
						<Link href='/'>
							<img src='/img/logo/logo.png' alt='vr' />
						</Link>
					</div>
					{/* End logo */}
					<div className='menu'>
						<Scrollspy
							className='anchor_nav'
							items={[
								"home",
								"about",
								"experience",
								"blog",
								"gallery",
								"contact",
							]}
							currentClassName='current'
							offset={-250}>
							<li>
								<Link href='/#home'>Home</Link>
							</li>
							<li>
								<Link href='/#about'>About</Link>
							</li>
							<li>
								<Link href='/#experience'>Experience</Link>
							</li>
							<li>
								<Link href='/blogs'>Blog</Link>
							</li>
							<li>
								<Link href='/gallery'>Gallery</Link>
							</li>
							<li>
								<Link href='/#contact'>Contact</Link>
							</li>
							<li>
								<a
									className='white-fill-bg btn-outline btn_sm'
									target='_blank'
									rel='noopener noreferrer'
									href='https://search.vaibhavrane.me'>
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
								<Link href='/'>
									<img src='/img/logo/dark.png' alt='vr' />
								</Link>
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
									<Link href='/#home'>
										<a onClick={handleClick}>Home</a>
									</Link>
								</li>
								<li>
									<Link href='/#about'>
										<a onClick={handleClick}>About</a>
									</Link>
								</li>
								<li>
									<Link href='/#experience'>
										<a onClick={handleClick}>Experience</a>
									</Link>
								</li>
								<li>
									<Link href='/blogs'>
										<a onClick={handleClick}>Blog</a>
									</Link>
								</li>
								<li>
									<Link href='/gallery'>
										<a onClick={handleClick}>Gallery</a>
									</Link>
								</li>
								<li>
									<Link href='/#contact'>
										<a onClick={handleClick}>Contact</a>
									</Link>
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
