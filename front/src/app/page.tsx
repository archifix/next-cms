import axios from 'axios'
// import { useEffect, useState } from 'react'

const API_URL = 'http://cms:1337/api/news'

export default async function Home() {
	// const [news, setNews] = useState([])

	// useEffect(() => {
	// 	axios.get('http://cms:1337/api/news').then(response => {
	// 		setNews(response.data)
	// 	})
	// }, [])

	const res = await fetch(`${API_URL}?populate=preview`)

	const { data } = await res.json()

	console.log(data)
	return (
		<div className='text-white'>
			<h1>lololo</h1>
		</div>
	)
}
