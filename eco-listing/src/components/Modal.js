export default function Modal({isOpen, onClose}) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-600 flex justify-center items-center`}>
      <div className="bg-white p-6 rounded-lg shadow-md z-10 max-w-screen-lg">
        <h2 className="text-lg font-semibold mb-4">Welcome to EcoBytes!</h2>
        <h3>Here is a guide for how to use our Eco features:</h3>
        <div className="text-gray-700">
          <p className="my-3">Each product has an <strong>'Eco Score'</strong>, which reflects how highly we rank it's eco-friendly attributes.</p>
          <p className="my-3">Our ranking attributes include:</p>
          <ul>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
          </ul>
        </div>
        <button onClick={onClose} className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Close</button>
      </div>
    </div>
  );
};