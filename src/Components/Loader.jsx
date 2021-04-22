const Loader = () => {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div class="spinner-border text-dark" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	)
}
export default Loader
