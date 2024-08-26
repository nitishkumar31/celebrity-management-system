import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";

const FooterButtons = ({
  isEditing,
  handleEditClick,
  handleCancelClick,
  handleSaveClick,
  handleDeleteClick,
}) => {
  return (
    <>
      {!isEditing ? (
        <div className="flex justify-end my-2 text-4xl items-center gap-4">
          <RiDeleteBinLine
            title="Delete"
            onClick={handleDeleteClick}
            className="text-red-500 hover:bg-red-200 hover:scale-105 active:scale-95 p-1 rounded duration-300 cursor-pointer"
          />
          <RiPencilLine
            title="Edit"
            onClick={handleEditClick}
            className="text-blue-500 hover:bg-blue-200 hover:scale-105 active:scale-95 p-1 rounded duration-300 cursor-pointer"
          />
        </div>
      ) : (
        <div className="flex justify-end my-2 text-4xl items-center gap-4">
          <RiCloseLargeLine
            title="Cancel"
            onClick={handleCancelClick}
            className="text-red-500 hover:scale-105 active:scale-95 border-2 border-red-500 p-1.5 rounded-full duration-300 cursor-pointer"
          />
          <GiCheckMark
            title="Save"
            onClick={handleSaveClick}
            className="text-green-500 hover:scale-105 active:scale-95 border-2 border-green-500 p-1.5 rounded-full duration-300 cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default FooterButtons;
