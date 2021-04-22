import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import './Home.css'
const Home = () => {
	const [data, setdata] = useState(null)
	const fetchData = () => {
		axios.get('https://6037c52d54350400177235f5.mockapi.io/product')
			.then(res => setdata(res.data))
			.catch(err => console.log(err))
	}
	useEffect(() => {
		fetchData()
	}, [])
	if (!data) return <Loader />
	return (
		<>
			{' '}
			{data && (
				<>
					{' '}
					<div className="container">
						<div className="list">
							{data.map(item => (
								<div className="card">
									<img className="card-img-top" src={item.productImage} alt="productimage" />
									<div className="card-body">
										<h6 class="card-title">{item.productName}</h6>
										<a href={`/${item.productId}`} class="btn btn-primary">
											See more details
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</>
			)}{' '}
		</>
	)
}

export default Home
