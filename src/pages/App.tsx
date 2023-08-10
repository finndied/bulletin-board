import { FC } from 'react'
import '../App.css'
import Header from '../components/Header/Header'
import Newsletter from '../components/Newsletter/Newsletter'
import SearchSection from '../components/SearchSection/SearchSection'
import Banner from '../components/Banner/Banner'
import CarImg from '../../public/images/banners/car.png'
import HouseImg from '../../public/images/banners/house.png'
import SofaImg from '../../public/images/banners/sofa.png'

const App: FC = () => {
	const handlePlaceAdClick = () => {}
	const handleMyAdsClick = () => {}
	const handleFavoriteClick = () => {}

	const handleSearch = (
		category: string,
		searchQuery: string,
		city: string
	) => {
		console.log('Searching with:', category, searchQuery, city)
	}

	const categories = ['Auto / Parts', 'Apartments', 'Personal items']
	const cities = ['London', 'Toronto', 'New-York']

	return (
		<div>
			<Header
				onFavoriteClick={handleFavoriteClick}
				onPlaceAdClick={handlePlaceAdClick}
				onMyAdsClick={handleMyAdsClick}
			/>
			<Newsletter />
			<SearchSection
				categories={categories}
				cities={cities}
				onSearch={handleSearch}
			/>
			<div className='flex items-center flex-wrap justify-center gap-8'>
				<Banner
					text='Auto and Auto Parts'
					imageUrl={CarImg}
					imageWidth={900}
					backgroundColor='bg-pink-100'
				/>
				<Banner
					text='Apartments'
					imageUrl={HouseImg}
					imageWidth={160}
					backgroundColor='bg-green-100'
				/>
				<Banner
					text='Personal items'
					imageUrl={SofaImg}
					imageWidth={180}
					backgroundColor='bg-blue-100'
				/>
				<Banner
					text='Auto and Auto Parts'
					imageUrl={CarImg}
					imageWidth={900}
					backgroundColor='bg-pink-100'
				/>
			</div>
		</div>
	)
}

export default App
