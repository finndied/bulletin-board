import React, { useState } from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'

interface SearchSectionProps {
	categories: string[]
	cities: string[]
	onSearch: (category: string, searchQuery: string, city: string) => void
}

const SearchSection: React.FC<SearchSectionProps> = ({
	categories,
	cities,
	onSearch
}) => {
	const [selectedCategory, setSelectedCategory] = useState('Any Category')
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCity, setSelectedCity] = useState('Any City')
	const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
	const [isCityMenuOpen, setIsCityMenuOpen] = useState(false)

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category)
		setIsCategoryMenuOpen(false)
	}

	const handleCityChange = (city: string) => {
		setSelectedCity(city)
		setIsCityMenuOpen(false)
	}

	const handleSearchClick = () => {
		onSearch(selectedCategory, searchQuery, selectedCity)
	}

	return (
		<div className='relative z-20 flex items-center justify-between -my-10 bg-white border-2 rounded-3xl py-2'>
			<div className='relative'>
				<button
					className='bg-white px-4 py-2 ml-1 flex border-r-2'
					onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
				>
					{selectedCategory}
					<ChevronUpDownIcon className='mx-1 h-6 w-6 text-black' />
				</button>
				{isCategoryMenuOpen && (
					<ul className='absolute z-10 left-2 mt-2 w-40 bg-white rounded-md shadow-lg'>
						{categories.map(category => (
							<li
								key={category}
								className='cursor-pointer px-4 py-2 hover:bg-gray-100'
								onClick={() => handleCategoryChange(category)}
							>
								{category}
							</li>
						))}
					</ul>
				)}
			</div>
			<input
				type='text'
				placeholder='Search by ads'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				className='outline-none bg-white py-2 border-r-2 w-4/6'
			/>
			<div className='relative'>
				<button
					onClick={() => setIsCityMenuOpen(!isCityMenuOpen)}
					className='bg-white px-4 py-2 border-r-2 flex'
				>
					{selectedCity}
					<ChevronUpDownIcon className='mx-1 h-6 w-6 text-black' />
				</button>
				{isCityMenuOpen && (
					<ul className='absolute z-10 -left-1 mt-2 w-32 bg-white rounded-md shadow-lg'>
						{cities.map(city => (
							<li
								key={city}
								className='cursor-pointer px-4 py-2 hover:bg-gray-100'
								onClick={() => handleCityChange(city)}
							>
								{city}
							</li>
						))}
					</ul>
				)}
			</div>
			<button
				className='bg-blue-700 hover:bg-blue-500 transition duration-200 text-white px-5 mr-2 py-2 rounded-2xl'
				onClick={handleSearchClick}
			>
				Search
			</button>
		</div>
	)
}

export default SearchSection
