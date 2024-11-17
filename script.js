
const smallNavbar = document.getElementById('small-navbar')
const btnToggleSmallNavbar = document.getElementById('btnToggleSmallNavbar')
const btnCloseSmallNavbar = document.getElementById('btnCloseSmallNavbar')
btnToggleSmallNavbar.onclick = () => {
    smallNavbar.classList.remove('-left-full')
    smallNavbar.classList.add('-left-0')
}

btnCloseSmallNavbar.onclick = () => {
    smallNavbar.classList.remove('-left-0')
    smallNavbar.classList.add('-left-full')
}