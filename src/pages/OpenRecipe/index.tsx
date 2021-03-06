import { useEffect } from "react"
import { AiFillStar } from "react-icons/ai"
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { Redirect, useHistory, useParams } from "react-router"
import Header from "../../components/Header"
import Spinner from "../../components/Spinner"
import { useAuth } from "../../hooks/useAuth"
import { useRecipes } from "../../hooks/useRecipes"
import { Container } from "./styles"

interface styleType {
  color: string
  textAlign: string
  marginTop: string
}
const OpenRecipe = () => {
  const {
    getRecipe,
    open,
    addFavourite,
    deleteRecipe,

    setEditRecipe,
  } = useRecipes()

  let history = useHistory()
  let params: { id: string } = useParams()

  useEffect(() => {
    ;(async function () {
      await getRecipe(params.id)
    })()
  }, [])

  const { image, name, description, price, id, favourite } = open

  function handleSetEdit() {
    setEditRecipe({ id, image, name, price, favourite, description })
    history.push(`/recipe/edit/${id}`)
  }

  function handleDelete() {
    deleteRecipe(id)
    history.push("/")
  }

  return (
    <>
      <Header />
      {name === undefined ? (
        <Spinner />
      ) : (
        <Container>
          <div>
            <img src={image} alt='Recipe Food' />
            <h2 className='open__title'>{name}</h2>
            <p className='open__description'>{description}</p>
            <p className='open__price'>
              {new Intl.NumberFormat("pt-PT", {
                style: "currency",
                currency: "EUR",
              }).format(price)}
            </p>
            <footer>
              <div className='open__footer-left'>
                <button onClick={handleSetEdit}>
                  <FaEdit color={"#3D3D3D"} size={20} />
                </button>
                <button onClick={(e) => handleDelete()}>
                  <FaTrashAlt color={"#3D3D3D"} size={20} />
                </button>
              </div>
              <div className='open__footer-right'>
                <button onClick={(e) => addFavourite(id)}>
                  <AiFillStar
                    color={favourite ? "#FD7777" : "#E8D6C0"}
                    size={25}
                  />
                </button>
              </div>
            </footer>
          </div>
        </Container>
      )}
    </>
  )
}

export default OpenRecipe
