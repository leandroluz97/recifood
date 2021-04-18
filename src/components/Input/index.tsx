import React, { ChangeEvent } from "react"
import { InputStyle } from "./styles"

interface InputType {
  placeholder: string
  value: string
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void
  name: string
}
const Input = ({ placeholder, value, handleInput, name }: InputType) => {
  return (
    <InputStyle
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={(event) => handleInput(event)}
    />
  )
}

export default Input
