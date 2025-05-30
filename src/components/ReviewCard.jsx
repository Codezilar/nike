import { star } from '../assets/icons'
import {reviews} from '../constants/index'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img className="rounded-full object-cover w-[120px] h-[120px]" src={imgURL} alt='cutomer' />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img className="object-contain m-0" src={star} height={24} width={24} />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h4 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h4>
    </div>
  )
}

export default ReviewCard