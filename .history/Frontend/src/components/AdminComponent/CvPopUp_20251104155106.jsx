const PopUpForm = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-Opacity-50  flex justify-center items-center">
      <div className="bg-white w-1/2 h-1/2 rounded-2xl p-6 flex flex-row ml-68">
        <h2 className="text-xl font-bold text-center">Update CV</h2>

        {/* Content goes here */}

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUpForm;
