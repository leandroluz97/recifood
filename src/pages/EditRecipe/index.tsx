import React, { ChangeEvent, useState } from "react"
import { Redirect, useHistory } from "react-router"
import Header from "../../components/Header"
import Input from "../../components/Input"
import { useRecipes } from "../../hooks/useRecipes"
import { Form, Container } from "./styles"

const EditRecipe = () => {
  const { editRecipe, updateRecipe } = useRecipes()
  const [formData, setFormData] = useState({
    image: {
      id: "image",
      placeholder: "Image link",
      value: editRecipe.image,
      validation: "required",
      valid: false,
      error: null,
    },
    name: {
      id: "name",
      placeholder: "Recipe name",
      value: editRecipe.name,
      validation: "required",
      valid: false,
      error: null,
    },
    ingredients: {
      id: "ingredients",
      placeholder: "All ingredients",
      value: editRecipe.description,
      validation: "required",
      valid: false,
      error: null,
    },
    price: {
      id: "price",
      placeholder: "Enter the price",
      value: String(editRecipe.price),
      validation: "required",
      valid: false,
      error: null,
    },
  })

  let history = useHistory()

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    let form = { ...formData }

    switch (event.target.name) {
      case "image":
        form.image.value = event.target.value
        break
      case "name":
        form.name.value = event.target.value
        break
      case "ingredients":
        form.ingredients.value = event.target.value
        break
      case "price":
        form.price.value = event.target.value
        break

      default:
        break
    }

    setFormData(form)
  }
  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    const image = formData.image.value.trim()
    const name = formData.name.value.trim()
    const description = formData.ingredients.value.trim()
    const price = parseInt(formData.price.value.trim())
    const { favourite, id } = editRecipe

    await updateRecipe({ image, name, description, price, favourite, id })

    history.push("/")
  }
  const { name } = editRecipe

  return name === undefined ? (
    <Redirect to='/' />
  ) : (
    <>
      <Header />
      <Container>
        <div>
          <h1 style={{ textAlign: "center", color: "#443B30" }}>
            Edit Recipe {editRecipe.name}
          </h1>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder={formData.image.placeholder}
              key={formData.image.id}
              value={formData.image.value}
              handleInput={handleInput}
              name={formData.image.id}
            />
            <Input
              placeholder={formData.name.placeholder}
              key={formData.name.id}
              value={formData.name.value}
              handleInput={handleInput}
              name={formData.name.id}
            />
            <Input
              placeholder={formData.ingredients.placeholder}
              key={formData.ingredients.id}
              value={formData.ingredients.value}
              handleInput={handleInput}
              name={formData.ingredients.id}
            />
            <Input
              placeholder={formData.price.placeholder}
              key={formData.price.id}
              value={formData.price.value}
              handleInput={handleInput}
              name={formData.price.id}
            />
            <button type='submit'>SUBMIT</button>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default EditRecipe
