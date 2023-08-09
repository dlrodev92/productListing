export default function Modal({isOpen, onClose}) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-600 flex justify-center items-center`}>
      <div className="bg-white p-6 rounded-lg shadow-md z-10 max-w-screen-lg cursor-pointer">
        <h2 className="text-lg font-semibold mb-4">Welcome to EcoBytes!</h2>
        <h3>Here is a guide for how to use our Eco features:</h3>
        <div className="text-gray-700">
          <p className="my-3">Each product has an <strong>'Eco Score'</strong>, which reflects how highly we rank it's eco-friendly attributes.</p>
          <p className="my-3">Our ranking attributes include:</p>
          <ul>
          <li><strong>Sustainable Products:</strong> Made with renewable resources, environmentally friendly processes, and responsible waste management.</li>
          <li><strong>Seasonal Products:</strong> Harvested at the peak of freshness and flavor, supporting natural growth cycles and reducing the need for artificial interventions.</li>
          <li><strong>Local Products:</strong> Sourced from nearby producers, reducing transportation emissions, and supporting the local economy.</li>
          </ul>
          <div className="text-gray-700">
            <p className="my-3">We use a <strong>Traffic Light System</strong> to rank products based on their eco-friendly attributes:</p>
            <ul>
              <li><span className="text-red-500 font-bold">Red:</span> Non-Eco-Friendly - These products do not meet our eco-friendly criteria.</li>
              <li><span className="text-yellow-500 font-bold">Yellow:</span> Intermediate - These products meet some of our eco-friendly criteria but have room for improvement.</li>
              <li><span className="text-green-500 font-bold">Green:</span> Eco-Friendly - These products fully meet our eco-friendly criteria and are considered environmentally responsible.</li>
            </ul>
          </div>
        </div>
        <button onClick={onClose} className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Close</button>
      </div>
    </div>
  );
};