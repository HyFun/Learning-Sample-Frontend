import './styles/index.less'

import add from './utils/calculate'
console.log(add(1, 2))

// promise
new Promise((resolve) => {
	setTimeout(() => {
		resolve(`promise`)
	}, 1000)
}).then((res) => {
	console.log(res)
})

const list = [1, 2, 3, 4, 5]
console.log(list.map((v) => v * 2))

window.addEventListener('DOMContentLoaded', () => {
	console.log(`DOMContentLoaded`)

	const img1 = document.createElement('img')
	img1.src = require('./assets/1.png')
	img1.width = 200
	img1.height = 200
	const img2 = document.createElement('img')
	img2.src = require('./assets/2.png')
	img2.width = 200
	img2.height = 200

	const box = document.querySelector('.images')
	box?.appendChild(img1)
	box?.appendChild(img2)
})
