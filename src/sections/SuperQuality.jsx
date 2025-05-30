import { shoe8 } from '../assets/images'
import Button from '../components/Button'

function SuperQuality() {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" id="about-us">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg::max-w-lg">
          {/* <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>  */}
          We provide you <span className="text-coral-red">Super</span> 
          <br />
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulousely crafted 
          footwear designed to elevate your experience, providing you 
          with unmatched quality, innovation, and a touch off elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 ">
         <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img className="" src={shoe8} alt='Shoe8' width={570} height={522} />
      </div>
    </section>
  )
}

export default SuperQuality