import { FC } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Newsletter from './components/Newsletter/Newsletter'
import SearchSection from './components/SearchSection/SearchSection'

const App: FC = () => {
	const handlePlaceAdClick = () => {}
	const handleMyAdsClick = () => {}
	const handleFavoriteClick = () => {}

  const handleSearch = (category: string, searchQuery: string, city: string) => {
    console.log('Searching with:', category, searchQuery, city);
  };

  const categories = ['Auto', 'Apartments', 'Personal items']; 
  const cities = ['London', 'Toronto', 'New-York'];

	return (
		<div>
			<Header
				onFavoriteClick={handleFavoriteClick}
				onPlaceAdClick={handlePlaceAdClick}
				onMyAdsClick={handleMyAdsClick}
			/>
      <Newsletter/>
      <SearchSection categories={categories} cities={cities} onSearch={handleSearch}/>
		</div>
	)
}

export default App
