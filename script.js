const r = () => Math.round(Math.random() * 256)


const b = document.querySelector("button")

b.addEventListener("click", () => {
    document.body.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`
})