import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'

import './Details.css'
const Details = props => {
	const [data, setdata] = useState(null)
	console.log(props.match.params.id)
	const fetchData = () => {
		axios.get(`https://6037c52d54350400177235f5.mockapi.io/product/${props.match.params.id}`)
			.then(res => setdata(res.data))
			.catch(err => console.log(err))
	}
	useEffect(() => {
		fetchData()
	})
	if (!data) return <Loader />
	return (
		<>
			{data && (
				<div className="container">
					<div className="list">
						<div className="card-details">
							<img className="card-img-top" src={data.productImage} alt="productimage" />
							<div className="card-body">
								<h6 class="card-title">{data.productName}</h6>
								<div classNAme="card-text">Brand : {data.productBrand}</div>
								<div classNAme="card-text">Category : {data.productCategory}</div>
								<div classNAme="card-text">Cost : {data.productCost}</div>
								<div classNAme="card-text">Color : {data.productColor}</div>
								<div classNAme="card-text">Material : {data.productMaterial}</div>
								<div classNAme="card-text">Availability : {data.productAvailability}</div>
								<div classNAme="card-text">LaunchDate : {data.productLaunchDate}</div>
								<div classNAme="card-text">Summary: {data.productSummary}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Details
