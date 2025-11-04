const PopUpForm = ({ onClose }) => {

    const handleSubmit= async(e)=>
    {   
        e.preventDefault();
        try{

        }
        catch{

        }

    }

    const handleChange= ()=>
    {
        const {name, value, file}
    }

    const [formData, setFormData]= useState({
        CVPDF:null
    })
  return (
    <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-1/2 h-1/2 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <h2 className="text-xl font-bold">Update CV</h2>

        <div className="h-full flex justify-center items-center flex-col ">
          <form onSubmit={handleSubmit}>
            <label className="text-2xl ">Upload Cv:</label>
            <input
              type="file"
              name="CVPDF"
              onChange={handleChange}
              className="w-1/2 rounded-2xl border file:border file:rounded-2xl p-4 file:p-2 file:text-blue-800 file:bg-blue-200 file:font:bold"
            />
            <button type="submit"></button>
          </form>
        </div>

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
