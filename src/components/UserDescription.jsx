import { useRef, useEffect } from "react";

const UserDescription = ({ isEditing, formData, handleInputChange }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [formData.description]);

  return (
    <div className="user-desc w-full">
      <label className="block my-1 mx-2 text-gray-500" htmlFor="desc">
        Description
      </label>
      <textarea
        ref={textAreaRef}
        id="desc"
        name="description"
        className={`${
          isEditing ? "border border-gray-300 ms-1.5" : ""
        } py-1 px-2 resize-none overflow-hidden w-full rounded-lg disabled:bg-white`}
        rows="2"
        value={formData.description}
        onChange={handleInputChange}
        disabled={!isEditing}
      />
    </div>
  );
};

export default UserDescription;
