import { Card } from "./styles"
import { FaEdit } from "react-icons/fa"
import { FaTrashAlt } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { useRecipes } from "../../hooks/useRecipes"
import { useHistory } from "react-router"

//AiFillStar
interface Recipe {
  id: string
  favourite: boolean
  name: string
  description: string
  price: number
  image: string
}

const RecipeCard = ({
  description,
  name,
  image,
  price,
  id,
  favourite,
}: Recipe) => {
  const { deleteRecipe, addFavourite, setEditRecipe } = useRecipes()
  let history = useHistory()

  function handleView(id: string) {
    history.push(`/${id}`)
  }
  function handleSetEdit() {
    setEditRecipe({ id, image, name, price, favourite, description })
    history.push(`/edit/${id}`)
  }

  return (
    <Card>
      <img src={image} alt='Recipe Food' />
      <h2 className='card__title'>{name}</h2>
      <p className='card__description'>{description}</p>
      <p className='card__price'>
        {new Intl.NumberFormat("pt-PT", {
          style: "currency",
          currency: "EUR",
        }).format(price)}
      </p>
      <footer>
        <div className='card__footer-left'>
          <button onClick={(e) => handleSetEdit()}>
            <FaEdit color={"#3D3D3D"} size={20} />
          </button>
          <button onClick={(e) => deleteRecipe(id)}>
            <FaTrashAlt color={"#3D3D3D"} size={20} />
          </button>
        </div>
        <div className='card__footer-right'>
          <button onClick={() => handleView(id)}>
            <AiFillEye color={"#3D3D3D"} size={25} />
          </button>
          <button onClick={(e) => addFavourite(id)}>
            <AiFillStar color={favourite ? "#FD7777" : "#E8D6C0"} size={25} />
          </button>
        </div>
      </footer>
    </Card>
  )
}

export default RecipeCard
