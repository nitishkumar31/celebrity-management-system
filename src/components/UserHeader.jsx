import { FaPlus, FaMinus } from "react-icons/fa6";

const UserHeader = ({
  user,
  isEditing,
  formData,
  onToggle,
  handleInputChange,
  isOpen,
}) => {
  return (
    <div
      onClick={onToggle}
      className="accordion-header flex justify-between items-center cursor-pointer"
    >
      <div className="user-accordion-title flex gap-2 items-center">
        <img
          className="size-10 rounded-full"
          src={user.picture}
          alt={user.first}
        />
        <input
          className={`${
            isEditing ? "border border-gray-300 ms-1.5" : ""
          } py-1 px-2 rounded-lg disabled:bg-white`}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>
      <span className="accordion-icon text-sm text-gray-800">
        {isOpen ? (
          <FaMinus viewBox="0 0 320 512" />
        ) : (
          <FaPlus viewBox="0 0 320 512" />
        )}
      </span>
    </div>
  );
};

export default UserHeader;
