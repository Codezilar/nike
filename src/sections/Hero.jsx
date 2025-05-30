import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants/index"
import { useState } from "react"



const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1); 

  
  return (
    <div>
      <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container " id="home">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red ">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> 
            <br />
            <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
          <Button label="Shop Now" iconURL={arrowRight} />
          <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
              {statistics.map((start) =>(
                <div className="" key={start.label}>
                  <p className="text-4xl font-palanquin font-bold">{start.value}</p>
                  <p className="leading-7 font-monstserrat text-slate-gray">{start.label}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img className="object-contain z-10" src={bigShoeImg} alt="Shoe collection" width={620} height={500}/>
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe) =>(
              <div key={shoe}>
                <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero