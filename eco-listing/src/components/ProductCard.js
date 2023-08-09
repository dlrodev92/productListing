

export default function ProductCard (props) {

    return(
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-4 flex-wrap shadow-xl cursor-pointer transition-transform duration-500 hover:scale-110">
        <div className={`bg-${props.color} w-[70px] h-[70px] absolute top-0 right-20 md:right-2 rounded-xl flex flex-col justify-center items-center gap-2 shadow-xl cursor-pointer hover:scale-110`}>
          <h3 className="font-bold text-md">Eco</h3>
          <h3 className="font-bold text-xl">{props.ecoNumber}</h3>
        </div>
        <img src={props.image} alt="productimage" className="w-[30%] sm:w-[60%] h-[200px] rounded-lg"/>
        <div className="w-full h-[70px] flex justify-around">
          <h3 className="font-bold text-md">{props.name}</h3>
          <h3 className="font-bold text-md">£{props.price}</h3>
        </div>
      </div>
    )
}
