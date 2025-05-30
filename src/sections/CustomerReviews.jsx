import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red ">Customers</span> Say
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here genuine stories from our satisfied customers about their 
        exceptional experiences with us.
      </p>  
      <div className="mt-4 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review) =>(
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews