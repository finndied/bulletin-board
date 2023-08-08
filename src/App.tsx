import { FC } from 'react'
import './App.css'
import Header from './components/Header/Header'

const App: FC = () => {
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

export default App
