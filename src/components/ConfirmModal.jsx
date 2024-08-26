import { RiCloseLargeLine } from "react-icons/ri";

const ConfirmModal = ({
  handleDeleteClick,
  handleCancelClick,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <div
        className={`wrapper ${
          showModal ? "fixed z-[9]" : "hidden z-[-2]"
        } top-0 left-0 h-screen w-screen bg-black/30`}
      ></div>
      <div
        className={`modal max-w-2xl mx-auto fixed inset-0 h-fit top-1/2 -translate-y-1/2 bg-white overflow-y-auto flex flex-col gap-10 p-5 transition-all duration-200 ease-in-out rounded-lg border border-gray-400 ${
          showModal ? "scale-100 z-10" : "scale-0 z-[-1]"
        }`}
      >
        <div className="modal-header flex justify-between items-center gap-5">
          <p>Are you sure you want to delete?</p>
          <RiCloseLargeLine
            onClick={() => setShowModal(false)}
            className="cursor-pointer"
          />
        </div>

        <div className="modal-buttons flex justify-end gap-4">
          <button
            onClick={handleCancelClick}
            className="py-1 px-3 border border-gray-400 rounded-lg hover:border-gray-500 duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteClick}
            className="py-1 px-3 bg-red-500 border border-red-500 text-white rounded-lg hover:bg-red-600 duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
