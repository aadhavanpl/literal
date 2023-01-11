import Head from 'next/head'
import Card from '../components/Card'
import styles from '../components/index.module.css'

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
		<div className={styles['container']}>
			<Head>
				<title>Literal</title>
				<meta name='Literal' content='A minimalistic blog website made using flask and sqlite' />
				<link rel='icon' href='/main-logo.ico' />
			</Head>
			<div className={styles['img-wrapper']}>
				<img src='/blog-heading.svg' />
			</div>
			<div  className={styles['grid-layout']}>
				{articles.map((item, index) => (
						<Card key={index} src={item.src} date={item.date} heading={item.heading}/>
				))}
			</div>
		</div>
	)
}