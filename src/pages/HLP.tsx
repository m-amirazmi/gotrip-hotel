import { Navbar } from '../components/Navbar';

export const HLP = () => {
	return (
		<>
			<Navbar />
			<main className="">
				{/* SEARCH HEADER */}
				<div className="bg-gray-300 bg-opacity-30">
					<div className="container mx-auto py-12">
						<h1 className="text-3xl font-semibold text-center mb-8">Find Your Dream Luxury Hotel</h1>
						<div className="relative bg-white flex items-center w-full rounded">
							<div className="flex flex-col w-4/12 px-6 my-4 gap-2 border-r">
								<label htmlFor="location">Location</label>
								<input className="text-gray-500 focus:outline-none" id="location" type="text" placeholder="London" />
							</div>
							<div className="flex flex-col w-3/12 px-6 my-4 gap-2 border-r">
								<label htmlFor="location">Check in - Check out</label>
								<input className="text-gray-500 focus:outline-none" id="location" type="text" placeholder="Wed 2 Mar  -  Fri 11 Apr" />
							</div>
							<div className="flex flex-col w-5/12 px-6 my-4 gap-2">
								<label htmlFor="location">Guest</label>
								<input className="text-gray-500 focus:outline-none" id="location" type="text" placeholder="2 adults - 1 children - 1 room" />
							</div>
							<div className="absolute right-4 top-1/2 -translate-y-1/2">
								<button className="bg-blue-700 text-white py-4 px-8 flex items-center gap-2 hover:opacity-95 rounded">
									<div className="w-4">
										<img className="w-full" src="/icons/ico-search.svg" alt="search icon" />
									</div>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* HLP MAIN CONTENT */}
				<div className="container mx-auto flex gap-8 py-12">
					<div className="w-3/12">
						<div className="border-b pb-8">
							<div className="w-full">
								<img className="w-full" src="/images/map.webp" alt="map" />
							</div>
							<h5 className="font-semibold my-4">Search by property name</h5>
							<div className="relative">
								<input className="w-full border p-2 pl-10 rounded focus:outline-none focus:border-blue-900 focus:border-opacity-50" type="text" placeholder="e.g. Best Western" />
								<div className="w-4 absolute -translate-y-1/2 top-1/2 left-4">
									<img className="w-full" src="/icons/ico-search-dark.svg" alt="icon search" />
								</div>
							</div>
						</div>
						<div className="border-b py-8">
							<h5 className="font-semibold mb-4">Deals</h5>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={true} />
								<label className="text-blue-700">Free cancellation</label>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Reserve now, pay at stay </label>
							</div>
							<div className="flex gap-2">
								<input className="" type="checkbox" checked={false} />
								<label className="">Properties with special offers</label>
							</div>
						</div>
						<div className="border-b py-8">
							<h5 className="font-semibold mb-4">Popular Filters</h5>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={true} />
								<label className="text-blue-700">Breakfast Included</label>
								<p className="ml-auto text-gray-400">92</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Romantic</label>
								<p className="ml-auto text-gray-400">45</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Airport Transfer</label>
								<p className="ml-auto text-gray-400">21</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">WiFi Included</label>
								<p className="ml-auto text-gray-400">78</p>
							</div>
							<div className="flex gap-2">
								<input className="" type="checkbox" checked={false} />
								<label className="">5 Star</label>
								<p className="ml-auto text-gray-400">679</p>
							</div>
						</div>
						<div className="border-b py-8">
							{/* Price Range */}
							<h5 className="font-semibold mb-4">Nightly Price</h5>
							<p>$0 - $500+</p>
						</div>
						<div className="border-b py-8">
							<h5 className="font-semibold mb-4">Amenities</h5>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={true} />
								<label className="text-blue-700">Breakfast Included</label>
								<p className="ml-auto text-gray-400">92</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">WiFi Included</label>
								<p className="ml-auto text-gray-400">45</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Pool</label>
								<p className="ml-auto text-gray-400">21</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Restaurant</label>
								<p className="ml-auto text-gray-400">78</p>
							</div>
							<div className="flex gap-2">
								<input className="" type="checkbox" checked={false} />
								<label className="">Air conditioning</label>
								<p className="ml-auto text-gray-400">679</p>
							</div>
							<p className="mt-3 text-sm text-blue-700 underline cursor-pointer hover:opacity-80">Show all 30+</p>
						</div>
						<div className="border-b py-8">
							<h5 className="font-semibold mb-4">Star Rating</h5>
							<div className="flex w-full items-center gap-4">
								<div className="bg-blue-700 bg-opacity-10 text-center p-2 px-4 rounded-full text-blue-700 cursor-pointer">1</div>
								<div className="bg-blue-700 bg-opacity-10 text-center p-2 px-4 rounded-full text-blue-700 cursor-pointer">2</div>
								<div className="bg-blue-700 bg-opacity-10 text-center p-2 px-4 rounded-full text-blue-700 cursor-pointer">3</div>
								<div className="bg-blue-700 bg-opacity-80 text-center p-2 px-4 rounded-full text-white cursor-pointer ">4</div>
								<div className="bg-blue-700 bg-opacity-80 text-center p-2 px-4 rounded-full text-white cursor-pointer ">5</div>
							</div>
						</div>
						<div className="border-b py-8">
							<h5 className="font-semibold mb-4">Guest Rating</h5>
							<div className="flex gap-2 mb-4">
								<input className="" type="radio" checked={true} />
								<label className="text-blue-700">Any</label>
								<p className="ml-auto text-gray-400">92</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="radio" checked={false} />
								<label className="">Wonderful 4.5+</label>
								<p className="ml-auto text-gray-400">45</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="radio" checked={false} />
								<label className="">Very good 4+</label>
								<p className="ml-auto text-gray-400">21</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="radio" checked={false} />
								<label className="">Good 3.5+</label>
								<p className="ml-auto text-gray-400">78</p>
							</div>
						</div>
						<div className="border-b py-8">
							<h5 className="font-semibold mb-4">Style</h5>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={true} />
								<label className="text-blue-700">Budget</label>
								<p className="ml-auto text-gray-400">92</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Mid-range</label>
								<p className="ml-auto text-gray-400">45</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Luxury</label>
								<p className="ml-auto text-gray-400">21</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Family-friendly</label>
								<p className="ml-auto text-gray-400">78</p>
							</div>
							<div className="flex gap-2">
								<input className="" type="checkbox" checked={false} />
								<label className="">Business</label>
								<p className="ml-auto text-gray-400">679</p>
							</div>
							<p className="mt-3 text-sm text-blue-700 underline cursor-pointer hover:opacity-80">Show all</p>
						</div>
						<div className="border-b py-8">
							<h5 className="font-semibold mb-4">Neighborhood</h5>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={true} />
								<label className="text-blue-700">Central London</label>
								<p className="ml-auto text-gray-400">92</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Guests' favourite area</label>
								<p className="ml-auto text-gray-400">45</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Westminster Borough</label>
								<p className="ml-auto text-gray-400">21</p>
							</div>
							<div className="flex gap-2 mb-4">
								<input className="" type="checkbox" checked={false} />
								<label className="">Kensington and Chelsea</label>
								<p className="ml-auto text-gray-400">78</p>
							</div>
							<div className="flex gap-2">
								<input className="" type="checkbox" checked={false} />
								<label className="">Oxford Street</label>
								<p className="ml-auto text-gray-400">679</p>
							</div>
							<p className="mt-3 text-sm text-blue-700 underline cursor-pointer hover:opacity-80">Show all</p>
						</div>
					</div>
					<div className="w-9/12">
						{/* Listing */}
						Listing
					</div>
				</div>
			</main>
		</>
	);
};
