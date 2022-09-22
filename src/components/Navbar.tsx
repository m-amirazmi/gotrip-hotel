export const Navbar: React.FC = () => {
	return (
		<header className="bg-blue-900 w-screen h-20 text-white">
			<nav className="flex items-center h-full w-full mx-auto container">
				<div className="flex items-center gap-12">
					<div className="w-28">
						<img className="w-full" src="/images/logo-white.webp" alt="logo white" />
					</div>
					<ul className="flex gap-8">
						<li className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer">
							<div>Home</div>
							<div className="w-2">
								<img className="w-full" src="/icons/ico-caret-down.svg" alt="dropdown" />
							</div>
						</li>
						<li className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer">
							<div>Categories</div>
							<div className="w-2">
								<img className="w-full" src="/icons/ico-caret-down.svg" alt="dropdown" />
							</div>
						</li>
						<li className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer">
							<div>Destinations</div>
						</li>
						<li className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer">
							<div>Pages</div>
							<div className="w-2">
								<img className="w-full" src="/icons/ico-caret-down.svg" alt="dropdown" />
							</div>
						</li>
						<li className="flex items-center gap-2 hover:opacity-80 transition-all cursor-pointer">
							<div>Contact</div>
						</li>
					</ul>
				</div>
				<div className="ml-auto flex gap-8 items-center">
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all">
							<p>USD</p>
							<div className="w-2">
								<img className="w-full" src="/icons/ico-caret-down.svg" alt="dropdown" />
							</div>
						</div>
						<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all">
							<div className="w-4">
								<img className="w-full" src="/images/flag.webp" alt="flag" />
							</div>
							<p>United Kingdom</p>
							<div className="w-2">
								<img className="w-full" src="/icons/ico-caret-down.svg" alt="dropdown" />
							</div>
						</div>
					</div>
					<div className="flex gap-4">
						<button className="py-2 px-4 rounded border bg-white text-slate-800 hover:bg-opacity-90 transition-all">Become An Expert</button>
						<button className="py-2 px-4 rounded border hover:bg-white hover:bg-opacity-10 transition-all">Sign In / Register</button>
					</div>
				</div>
			</nav>
		</header>
	);
};
