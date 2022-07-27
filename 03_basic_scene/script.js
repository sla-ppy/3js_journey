// 1. scene
// 2. objects - mesh = geometry + material
// 3. camera
// 4. renderer

const scene = new THREE.Scene()
console.log(scene)


// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xFF0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
console.log(mesh)


// creating aspect ratio object
const sizes = {
	width: 800,
	height: 600
}
// fov(usually 45-55), ascept ratio 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
console.log(camera)
// move camera backward
camera.position.z = 3

// getting html element in js
const canvas = document.querySelector('canvas.webgl') // can also be canvas.webgl
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})

//resize renderer, when we resize this we resize the canvas
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)