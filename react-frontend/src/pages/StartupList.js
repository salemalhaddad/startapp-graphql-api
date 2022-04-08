import React from 'react'
import "../index.css";
import { useStartups } from '../hooks/useStartups'
import { Link } from "react-router-dom"

export default function StartupList() {

	const { error, loading, data } = useStartups();

		console.log({ error, data, loading })

		// console.log({data})
		if (loading) return <p>Loading...</p>;
  		if (error) return (
			  console.log(JSON.stringify(error, null, 2)),
			  <p>Error :(</p>
		  )

		return (
			<div className="StartupsList">
				{data.getAllStartups.map((startup) => {
					return(
						<Link to={`/${startup.name}`}>
							<img src={startup.img} alt=""/>
							<h2>{startup.name}</h2>
						</Link>
					);
				})}
			</div>
		);
}


