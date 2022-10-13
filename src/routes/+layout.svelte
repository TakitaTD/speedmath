<slot />

<style>
	:root {
		background-color: #e0e0e0;
		display: flex;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
		font-size: 48px;
	}
	:global(body, html) {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
	}
	:global(body)::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-image: url('/284791-1763830463.jpg');
		background-size: cover;
		z-index: -1;
	}
	:global(body)::after {
		content: '';
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #00000040;
		z-index: -2;
	}
</style>
