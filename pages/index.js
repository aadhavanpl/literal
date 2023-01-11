import Head from 'next/head'
import Card from '../components/Card'
import Blog from '../components/Blog'

export default function Home() {

	const articles = [
		{src:'/temp-img-1.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		{src:'/temp-img-2.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		{src:'/temp-img-1.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		{src:'/temp-img-2.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		{src:'/temp-img-1.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		{src:'/temp-img-2.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		{src:'/temp-img-1.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		{src:'/temp-img-2.png', date:"12th January 2022 7:52PM", heading: "Quedo mooy bueno como fond de pantalla del escritorio de..."},
		
]

	return (
		<div>
			<Head>
				<title>Literal</title>
				<meta name='Literal' content='A minimalistic blog website made using flask and sqlite' />
				<link rel='icon' href='/main-logo.ico' />
			</Head>
			
			<Card src='/temp-img-1.png' date="12th January 2022 7:52PM" heading="Quedo mooy bueno como fond de pantalla del escritorio de..."/>
			<Card src='/temp-img-2.png' date="12th January 2022 7:52PM" heading="Quedo mooy bueno como fond de pantalla del escritorio de..."/>
		</div>
	)
}