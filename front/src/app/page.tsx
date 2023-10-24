import axios from 'axios'
import Link from 'next/link'
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
		<div className='text-black'>
			<Link href={"http://localhost:1337/admin"}>Admin</Link>
			<h1>lololo</h1>
		</div>
	)
}
