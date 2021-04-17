import React from "react"
import { useRecipes } from "../../hooks/useRecipes"
import { InputSearch } from "./styles"
const Search = () => {
  const { search, setSearch } = useRecipes()
  return (
    <InputSearch
      type='text'
      placeholder='Search for recipes'
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    ></InputSearch>
  )
}

export default Search
