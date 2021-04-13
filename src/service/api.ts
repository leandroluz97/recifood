import axios from "axios"

export const api = axios.create({
  baseURL:
    "https://recifood-58f94-default-rtdb.europe-west1.firebasedatabase.app",
})
