import React, { FC } from 'react'

export interface CommonLayoutProps {
	children?: React.ReactNode
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
	return (
		<div className="nc-CommonLayoutAccount bg-neutral-50 px-5 dark:bg-neutral-900">
			{/* <div className="border-b border-neutral-200 bg-white pt-12 dark:border-neutral-700 dark:bg-neutral-800"></div> */}
			<div className="container px-5 pb-24 pt-5 sm:pt-5 lg:pb-32">
				{children}
			</div>
		</div>
	)
}

export default CommonLayout
