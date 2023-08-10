import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
interface BannerProps {
	text: string
	imageUrl: string
	imageWidth: number
	backgroundColor: string
}

const Banner: React.FC<BannerProps> = ({
	text,
	imageUrl,
	imageWidth,
	backgroundColor
}) => {
	const bannerClasses = clsx(
		'mt-16 border rounded-lg overflow-hidden',
		backgroundColor
	)

	return (
		<div className={bannerClasses}>
			<div className='flex items-start justify-center w-64 h-32 relative'>
				<div className='absolute right-36 pl-3 pt-3'>
					<Link to={`/search/${text.toLowerCase().replace(/ /g, '-')}`}>
						<p className='text-lg font-semibold leading-5'>{text}</p>
					</Link>
				</div>
				<div className='overflow-hidden'>
					<img
						src={imageUrl}
						alt='Banner'
						width={imageWidth}
						className='absolute -right-16 top-7'
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner
