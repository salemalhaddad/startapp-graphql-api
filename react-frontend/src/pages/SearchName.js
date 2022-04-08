import React, { useState } from 'react'
import { gql, useLazyQuery } from "@apollo/client"
import { useNavigate } from 'react-router-dom'

const GET_STARTUPS_NAME = gql`
	query startupName($name: String!) {
		getStartupByName(name: $name) {
			name
			uuid
	}
}
`
export default function SearchName() {
	let navigate = useNavigate();
	const routeChange = (x) => {
	  let path = x;
	  navigate(path);
	};

	const [name, setName] = useState("")

	const [getName, { loading, error, data, called }] = useLazyQuery(GET_STARTUPS_NAME, {
		variables: {
			name
		}
	})


	console.log(
		called,
		loading,
		data,
		error
	)

	if (loading) return <p>Loading...</p>;
	if (error) return (
			console.log(JSON.stringify(error, null, 2)),
			<div>
				<p>Error :(</p>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('/')}>Home</button>
			</div>
			)

	return (
		<div>
			<input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"value={name} onChange={(e) => setName(e.target.value)} />
			<br></br>

			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => getName()}>Search</button>
			{loading && <div>spinner</div>}
			{error && <div>error :(</div>}
			{data && (
				<div className="searchName">
					<br></br>
					<p className="byName">name: {data.getStartupByName.name}</p>
					<p>uuid: {data.getStartupByName.uuid}</p>
				</div>
			)}
		</div>
	);
}
