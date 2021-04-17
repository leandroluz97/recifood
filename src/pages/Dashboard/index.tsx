import React, { useEffect } from "react"
import { useRecipes } from "../../hooks/useRecipes"
//import { api } from "../../service/api"
import RecipeCard from "../../components/Recipe"
import { Container } from "./styles"
import Spinner from "../../components/Spinner"

/*
const datas = [
  {
    name: "Feijão",
    description:
      "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
    price: "21.90",
    available: true,
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "A la Camarón",
    description:
      "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
    price: "25.90",
    available: true,
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "lazanha",
    price: "23,99",
    description:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    available: true,
  },
  {
    name: "Veggie",
    description:
      "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
    price: "21.90",
    available: true,
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Pudim de peixe",
    description:
      "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
    price: "25.90",
    available: true,
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Moda Caboverdianaa",
    price: "23,99",
    description:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    available: true,
  },
  {
    name: "Pasta carbonara",
    description:
      "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
    price: "21.90",
    available: true,
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "A la Camarón",
    description:
      "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
    price: "25.90",
    available: true,
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    image:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Coxa de frango",
    price: "23,99",
    description:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    available: true,
  },
]

const data = {
  name: "Cachupa",
  description:
    "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
  price: "15.99",
  image:
    "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}
*/
const Dashboard = () => {
  const { recipes, search, favourites } = useRecipes()

  /*
  useEffect(() => {
    api
      .post("/food.json", { data })
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])
*/

  const searched = favourites
    ? recipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(search) &&
          recipe.favourite === true
      )
    : recipes.filter((recipe) => recipe.name.toLowerCase().includes(search))

  console.log(searched)

  return (
    <Container>
      {searched.length === 0 ? (
        <Spinner />
      ) : (
        searched.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            price={recipe.price}
            image={recipe.image}
            description={recipe.description}
            id={recipe.id}
            favourite={recipe.favourite}
          />
        ))
      )}
    </Container>
  )
}

export default Dashboard
