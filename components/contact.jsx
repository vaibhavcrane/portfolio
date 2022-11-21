import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import Social from "./social";

// TODO: Fix warning Warning: Received `true` for a non-boolean attribute `div`.
//TODO: Redo animations

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data, e) => {
		e.target.reset();
		const res = await fetch("/api/sendgrid", {
			method: "POST",
			body: JSON.stringify(data),
		}).catch((err) => console.log(err));
	};

	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
		}
		if (!inView) {
			animation.start({ opacity: 0, y: 50 });
		}
	}, [inView]);
	return (
		<div ref={ref} className='section' id='contact'>
			<div
				className='talk bg_image_props'
				style={{
					backgroundImage: `url(${"img/footer/background.jpg"})`,
				}}>
				<div className='shape'>
					<img className='svg' src='/img/svg/paper.svg' alt='partners brand' />
				</div>
				{/* End shape */}

				<div className='background' id='talk'>
					<div className='overlay'></div>
				</div>

				<motion.div animate={animation} className='container talk_inner'>
					<div className='contact'>
						<div className='left'>
							<div className='title'>
								<span style={{ backgroundColor: "#f2f2f2" }}>Contact</span>
								<h4 className='eye-animation'>Stalk me on social media</h4>
								<div className='talk_inner-socials'>
									<Social />
								</div>
							</div>
							<div>
								<h4>or send me an email &#8594;</h4>
							</div>
							<div></div>
						</div>
						<div className='right'>
							<div className='fields'>
								<div className='first'>
									<form
										className='contact_form'
										onSubmit={handleSubmit(onSubmit)}>
										<ul>
											<li>
												<input
													{...register("name", { required: true })}
													type='text'
													placeholder='Name'
												/>
												{errors.name && errors.name.type === "required" && (
													<span>Name is required</span>
												)}
											</li>
											{/* End first name field */}

											<li>
												<input
													{...register(
														"email",
														{
															required: "Email is Required",
															pattern: {
																value: /\S+@\S+\.\S+/,
																message:
																	"Entered value does not match email format",
															},
														},
														{ required: true }
													)}
													type='email'
													placeholder='Email'
												/>
												{errors.email && (
													<span role='alert'>{errors.email.message}</span>
												)}
											</li>
											{/* End email name field */}

											<li>
												<textarea
													{...register("subject", { required: true })}
													placeholder='Message'></textarea>
												{errors.subject && <span>Subject is required.</span>}
											</li>
											{/* End subject  field */}
										</ul>

										<div className='button'>
											<button
												type='submit'
												className='white-fill-bg fill-black'>
												Send Message
											</button>
										</div>
										{/* End tokyo_tm_button */}
									</form>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
