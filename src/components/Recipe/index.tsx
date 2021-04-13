import { Card } from "./styles"
import { FaEdit } from "react-icons/fa"
import { FaTrashAlt } from "react-icons/fa"
import { AiFillStar } from "react-icons/ai"

//AiFillStar
interface Recipe {
  id: number | string
  available: number
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
  available,
}: Recipe) => {
  return (
    <Card>
      <img src={image} alt='Recipe Food' />
      <h2 className='card__title'>{name}</h2>
      <p className='card__description'>{description}</p>
      <p className='card__price'>{price}</p>
      <footer>
        <div className='card__footer-left'>
          <button>
            <FaEdit color={"#3D3D3D"} size={20} />
          </button>
          <button>
            <FaTrashAlt color={"#3D3D3D"} size={20} />
          </button>
        </div>
        <button className='card__footer-right'>
          <AiFillStar color={"#E4E4EB"} size={25} />
        </button>
      </footer>
    </Card>
  )
}

export default RecipeCard
