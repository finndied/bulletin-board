import { FC } from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'

const SearchPage: FC = () => {
	const { category } = useParams<{ category: string }>()
	const handlePlaceAdClick = () => {}
	const handleMyAdsClick = () => {}
	const handleFavoriteClick = () => {}

	return (
		<div>
			<Header
				onFavoriteClick={handleFavoriteClick}
				onPlaceAdClick={handlePlaceAdClick}
				onMyAdsClick={handleMyAdsClick}
			/>
		</div>
	)
}

export default SearchPage
