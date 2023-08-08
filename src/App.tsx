import { FC } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Newsletter from './components/Newsletter/Newsletter'

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
      <Newsletter/>
		</div>
	)
}

export default App
