import React, { ChangeEvent, useState } from "react"
import { Redirect, useHistory } from "react-router"
import { toast } from "react-toastify"
import Header from "../../components/Header"
import Input from "../../components/Input"
import { useRecipes } from "../../hooks/useRecipes"
import { Form, Container } from "./styles"
import { useAuth } from "../../hooks/useAuth"

interface InputType {
  id: string
  placeholder: string
  value: string
  validation: string
  valid: boolean
  error: string
}

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    image: {
      id: "image",
      placeholder: "Image link",
      value: "",
      validation: "required",
      valid: false,
      error: "",
    },
    name: {
      id: "name",
      placeholder: "Recipe name",
      value: "",
      validation: "required",
      valid: false,
      error: "",
    },
    ingredients: {
      id: "ingredients",
      placeholder: "All ingredients",
      value: "",
      validation: "required",
      valid: false,
      error: "",
    },
    price: {
      id: "price",
      placeholder: "Enter the price",
      value: "",
      validation: "required",
      valid: false,
      error: "",
    },
  })

  const { currentUser } = useAuth()

  function checkValidity(value: string, type: string) {
    let expression = new RegExp(
      /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/
    )

    let valid = true
    let error = ""

    if (type === "image" && (!expression.test(value) || value === "")) {
      valid = false
      error = 'Enter a valid link eg.:"https://www.image.com/ihghvg"'
    }

    if (type === "name" && value === "") {
      valid = false
      error = 'Enter a valid name eg.:"John Doe"'
    }
    if (type === "ingredients" && value === "") {
      valid = false
      error = 'Enter a valid ingredients eg.:"John Doe"'
    }
    if ((type === "price" && !isNaN(Number(value))) || value === "") {
      valid = false
      error = 'Enter a valid price eg.:"11.99"'
    }

    return { valid, error }
  }
  const { addRecipe } = useRecipes()
  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    let form = { ...formData }

    switch (event.target.name) {
      case "image":
        form.image.value = event.target.value
        const imageValid = checkValidity(form.image.value, "image")
        form.image.valid = imageValid.valid
        form.image.error = imageValid.error

        break
      case "name":
        form.name.value = event.target.value
        const nameValid = checkValidity(form.name.value, "name")
        form.name.valid = nameValid.valid
        form.name.error = nameValid.error
        break
      case "ingredients":
        form.ingredients.value = event.target.value
        const ingredientsValid = checkValidity(form.name.value, "ingredients")
        form.ingredients.valid = ingredientsValid.valid
        form.ingredients.error = ingredientsValid.error
        break
      case "price":
        form.price.value = event.target.value
        const priceValid = checkValidity(form.name.value, "ingredients")
        form.price.valid = priceValid.valid
        form.price.error = priceValid.error

        break

      default:
        break
    }

    setFormData(form)
  }

  let history = useHistory()
  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    const formArr = Object.values(formData)

    const errorForm = formArr.find((input) => input.valid === false)
    const isError = { ...(errorForm as InputType) }
    const { valid, error } = isError

    console.log(error, valid)

    if (!valid && valid !== undefined) {
      toast.error(error === "" ? "Please fill the form" : error)
      return
    }

    const image = formData.image.value.trim()
    const name = formData.name.value.trim()
    const description = formData.ingredients.value.trim()
    const price = parseInt(formData.price.value.trim())

    addRecipe({ image, name, description, price })
    history.push("/")
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 style={{ textAlign: "center", color: "#443B30" }}>
            ADD NEW RECIPE
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

export default AddRecipe
