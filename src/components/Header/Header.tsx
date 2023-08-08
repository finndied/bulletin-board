interface HeaderProps {
	onPlaceAdClick: () => void
	onMyAdsClick: () => void
	onFavoriteClick: () => void
}

const Header: React.FC<HeaderProps> = ({
	onPlaceAdClick,
	onMyAdsClick,
	onFavoriteClick
}) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center space-x-4'>
				<div className='text-xl font-bold'>Bulletin</div>
				<button
					className='text-xl text-white transition duration-200 hover:bg-blue-500 rounded-md w-48 bg-blue-700 py-1'
					onClick={onPlaceAdClick}
				>
					Place an ad
				</button>
			</div>
			<div className='flex items-center space-x-4 text-xl'>
				<div className='flex space-x-2 text-xl'>
					<button className='icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6 hover:fill-gray-600 transition duration-200'
						>
							<path
								fillRule='evenodd'
								d='M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
					<button className='' onClick={onFavoriteClick}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6 hover:fill-red-600 transition duration-200 '
						>
							<path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
						</svg>
					</button>
				</div>
				<button
					className='hover:text-blue-500 text-blue-700 '
					onClick={onMyAdsClick}
				>
					My Ads
				</button>
			</div>
		</div>
	)
}

export default Header
