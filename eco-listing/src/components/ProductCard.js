

export default function ProductCard (props) {

    return(
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-4 flex-wrap">
        <div className="w-[70px] h-[70px] bg-greenL absolute  top-0 right-20  md:right-2 rounded-xl flex flex-col justify-center items-center gap-2 shadow-xl cursor-pointer hover:scale-110">
          <h3 className="font-bold text-md">Eco</h3>
          <h3 className="font-bold text-xl">{props.ecoNumber}</h3>
        </div>
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/10/12/muscle-food-meat-products.jpg?width=1200" className="w-[60%] sm:w-[85%] h-[200px] rounded-lg" />
        <div className="w-full h-[70px] flex justify-around">
          <h3 className="font-bold text-md">{props.prodcutName}</h3>
          <h3 className="font-bold text-md">£{props.price}</h3>
        </div>
      </div>
    )
}