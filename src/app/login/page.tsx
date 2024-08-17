"use client"
import React, { FC } from 'react'
import facebookSvg from '@/images/Facebook.svg'
import twitterSvg from '@/images/Twitter.svg'
import googleSvg from '@/images/Google.svg'
import Input from '@/shared/Input'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export interface PageLoginProps {}

const loginSocials = [
	{
		name: 'Continue with Facebook',
		href: '#',
		icon: facebookSvg,
	},
	{
		name: 'Continue with Twitter',
		href: '#',
		icon: twitterSvg,
	},
	{
		name: 'Continue with Google',
		href: '#',
		icon: googleSvg,
	},
]



const PageLogin: FC<PageLoginProps> = ({}) => {
	const router=useRouter();
	const handleSubmit=async(e:any)=>{
		e.preventDefault();
		const res = await signIn("credentials", {
		username: "mustafa",
		password: "1234",
		redirect: false, // Change to true to redirect to dashboard after sign in
		});
		console.log("signIn success", res);
		if (res && res.ok) {
		router.push("/home-2");
		}

	}
	return (
		<div className={`nc-PageLogin`}>
			<div className="container mb-24 lg:mb-32">
				<h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] text-neutral-900 dark:text-neutral-100 md:text-5xl md:leading-[115%]">
					Login
				</h2>
				<div className="mx-auto max-w-md space-y-6">
					<div className="grid gap-3">
						{loginSocials &&
							loginSocials.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className="flex w-full transform rounded-lg bg-primary-50 px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-neutral-800 sm:px-6"
								>
									<Image
										className="flex-shrink-0"
										src={item.icon}
										alt={item.name}
									/>
									<h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
										{item.name}
									</h3>
								</a>
							))}
					</div>
					{/* OR */}
					<div className="relative text-center">
						<span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
							OR
						</span>
						<div className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border border-neutral-100 dark:border-neutral-800"></div>
					</div>
					{/* FORM */}
					<form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} method="post">
						<label className="block">
							<span className="text-neutral-800 dark:text-neutral-200">
								Email address
							</span>
							<Input
								type="email"
								placeholder="example@example.com"
								className="mt-1"
							/>
						</label>
						<label className="block">
							<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
								Password
								<Link href="/login" className="text-sm font-medium underline">
									Forgot password?
								</Link>
							</span>
							<Input type="password" className="mt-1" />
						</label>
						<ButtonPrimary type="submit">Continue</ButtonPrimary>
					</form>

					{/* ==== */}
					<span className="block text-center text-neutral-700 dark:text-neutral-300">
						New user? {` `}
						<Link href="/signup" className="font-semibold underline">
							Create an account
						</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default PageLogin
