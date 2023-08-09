export default function Modal({isOpen, onClose}) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-600 flex justify-center items-center`}>
      <div className="bg-white p-6 rounded-lg shadow-md z-index-50 max-w-screen-lg">
        <h2 className="text-lg font-semibold mb-4">Welcome to EcoBytes!</h2>
        <h3>Here is a guide for how to use our Eco features:</h3>
        <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut!
        </p>
        <button onClick={onClose} className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">Close</button>
      </div>
    </div>
  );
};