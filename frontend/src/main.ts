import './style.css'
import { getMovies, postMovie } from './http'

const getButton = document.getElementById("get") as HTMLButtonElement
const postButton = document.getElementById("post") as HTMLButtonElement

const getDemo = async () => {
  const response = await getMovies(1000)
  if (!response.success)
    return

  console.log(response.data)
}

const postDemo = async () => {
  const response = await postMovie({ title: "Titanic", year: 2000 })
  if (!response.success)
    return

  console.log(response.data)
}


const fruits = [
  { name: "alma", color: "piros" },
  { name: "korte", color: "barna" },
  { name: "narancs", color: "narancssarga" },
  { name: "cseresznye", color: "piros" },
]

document.getElementById("akarmi")?.innerHTML = fruits.map(fruit => `<p>${fruit.name}</p>`).join("")



getButton.addEventListener("click", getDemo)
postButton.addEventListener("click", postDemo)
