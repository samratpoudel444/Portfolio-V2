const PopUpForm = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 h-1/2 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <h2 className="text-xl font-bold">Update CV</h2>

        {/* Your form or content */}

        <button
          onClick={onClose}
          className="self-end px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUpForm;
