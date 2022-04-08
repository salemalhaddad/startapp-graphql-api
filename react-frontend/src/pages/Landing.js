import React from 'react'
import '../index.css';
import { useNavigate } from "react-router-dom";


export default function Landing() {
	let navigate = useNavigate();
	const routeChange = (x) => {
	  let path = x;
	  navigate(path);
	};

	return (
		<div className="Landing"> 
			<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
			<div>
				<div className="text-xl font-medium text-pink">
					<ul>
						<li>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('list')}>Click to list all startups</button>
						</li>
						<li>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('name-search')}>Click to list all startups by name</button>
						</li>
						<li>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('uuid-search')}>Click to list all startups by UUID</button>
						</li>
					</ul>
				</div>
				{/* <p className="text-xl font-medium text-pink">You have a new message!</p> */}
			</div>

			</div>

		</div>
	);
}


