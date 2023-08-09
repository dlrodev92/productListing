
export default function FilterSearch () {

    return(
    <div className="w-full max-w-xs mx-auto">
      <label htmlFor="product" className="block text-sm font-medium md:text-xl md:font-bold text-gray-700">
        Select Product Type
      </label>
      <select
        id="product"
        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-sm md:text-lg"
      >
        <option value="green">Eco Product </option>
        <option value="yellow">Semi-Eco Product</option>
        <option value="red">Non-Eco Product</option>
      </select>
    </div>
    )
}