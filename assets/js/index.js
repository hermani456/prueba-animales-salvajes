import { Serpiente } from './Serpiente.js'
import { Lobo } from './Lobo.js'
import { Oso } from './Oso.js'
import { Aguila } from './Aguila.js'
import { Leon } from './Leon.js'

const url = 'http://adrianaol.github.io/prueba_animales_salvajes/animales.json'
;(async () => {
	const request = async (url) => {
		const response = await fetch(url)
		const result = await response.json()
		const listadoAnimales = []
		const getElementBySelector = (selector) => document.querySelector(selector)
		const getValueBySelector = (selector) =>
			getElementBySelector(selector).value

		const button = getElementBySelector('#btn-registrar')
		button.addEventListener('click', () => {
			const animal = getValueBySelector('#animal')
			const edad = getValueBySelector('#edad')
			const comentarios = getValueBySelector('#comentarios')
			const preview = getElementBySelector('#preview')
			const animales = getElementBySelector('#Animales')

			if (animal === 'Leon') {
				const leon = new Leon(
					animal,
					edad,
					result.animales[0].imagen,
					comentarios,
					result.animales[0].sonido
				)
				listadoAnimales.push(leon)
			} else if (animal === 'Lobo') {
				const lobo = new Lobo(
					animal,
					edad,
					result.animales[1].imagen,
					comentarios,
					result.animales[1].sonido
				)
				listadoAnimales.push(lobo)
			} else if (animal === 'Oso') {
				const oso = new Oso(
					animal,
					edad,
					result.animales[2].imagen,
					comentarios,
					result.animales[2].sonido
				)
				listadoAnimales.push(oso)
			} else if (animal === 'Serpiente') {
				const serpiente = new Serpiente(
					animal,
					edad,
					result.animales[3].imagen,
					comentarios,
					result.animales[3].sonido
				)
				listadoAnimales.push(serpiente)
			} else if (animal === 'Aguila') {
				const aguila = new Aguila(
					animal,
					edad,
					result.animales[4].imagen,
					comentarios,
					result.animales[4].sonido
				)
				listadoAnimales.push(aguila)
			}
			preview.innerHTML = `<img src='assets/imgs/${
				listadoAnimales[listadoAnimales.length - 1].img
			}' class='h-100 w-75' style='object-fit: cover;'>`
			animales.innerHTML = ''
			listadoAnimales.forEach((animal) => {
				console.log(animal)

				animales.innerHTML += `
                           <div class='card w-25 h-50' style='width: 18rem;'>
                                   <img src='assets/imgs/${animal.img}' class='card-img-top h-75' style='object-fit: cover;'>
                               <div class='card-body bg-secondary h-25 p-0 d-flex align-content-center justify-content-center'>
                                   <img class='' type='button' src='assets/imgs/audio.svg' class='w-25'>
                               </div>
                           </div>`
			})
			document.querySelector('#animal').value = ''
			document.querySelector('#edad').value = ''
			document.querySelector('#comentarios').value = ''
		})
	}
	return request(url)
})()
