

export default function ProductCard () {

    return(
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 flex-wrap ">
             <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/10/12/muscle-food-meat-products.jpg?width=1200" className="w-[60%] sm:w-[75%] h-[200px] rounded-lg"/>
            <div className="w-full h-[70px] flex justify-around">
                <h3 className="font-bold text-md">Meat Boundle</h3>
                <h3 className="font-bold text-md">£25</h3>
            </div>
          </div>
    )
}