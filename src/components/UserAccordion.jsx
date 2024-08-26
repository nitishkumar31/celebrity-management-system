import { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import FooterButtons from "./FooterButtons";
import ConfirmModal from "./ConfirmModal";

const UserAccordion = ({
  user,
  isOpen,
  onToggle,
  onEditMode,
  onUpdateUser,
  onDeleteUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: `${user.first} ${user.last}`,
    age: "",
    gender: user.gender,
    country: user.country,
    description: user.description,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const textAreaRef = useRef(null);

  // Calculate the age based on date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference).getUTCFullYear() - 1970;
    return age;
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      age: calculateAge(user.dob),
    }));
  }, [user.dob]);

  // Auto height for Textarea field
  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [formData.description]);

  // Validate form and check for changes
  useEffect(() => {
    const isEmptyField = Object.values(formData).some(
      (value) => typeof value === "string" && value.trim() === ""
    );

    const initialData = {
      name: `${user.first} ${user.last}`,
      age: calculateAge(user.dob),
      gender: user.gender,
      country: user.country,
      description: user.description,
    };

    const isChanged = JSON.stringify(formData) !== JSON.stringify(initialData);

    setIsFormValid(!isEmptyField);
    setHasChanges(isChanged);
  }, [formData, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Prevent input of numbers in the nationality field
    if (name === "country" && /\d/.test(value)) {
      return;
    }

    // Prevent input of text in the age field
    if (name === "age" && isNaN(value)) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    if (formData.age >= 18) {
      setIsEditing(true);
      onEditMode(true);
    }
  };

  const handleSaveClick = () => {
    if (isFormValid && hasChanges) {
      onUpdateUser({ ...user, ...formData });
      setIsEditing(false);
      onEditMode(false);
    }
  };

  const handleCancelClick = () => {
    setFormData({
      name: `${user.first} ${user.last}`,
      age: calculateAge(user.dob),
      gender: user.gender,
      country: user.country,
      description: user.description,
    });
    setIsEditing(false);
    onEditMode(false);
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    onDeleteUser(user.id);
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="accordion py-2 px-4 border border-gray-300 rounded-xl overflow-hidden mb-5">
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

      <div
        className={`accordion-body ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        } grid w-full transition-all duration-500`}
      >
        <div className="user-details my-4 flex flex-row flex-wrap justify-between gap-4">
          <div className="user-age">
            <label className="block m-2 text-gray-500" htmlFor="age">
              Age
            </label>
            <input
              className={`${
                isEditing ? "border border-gray-300 ms-1.5" : ""
              } py-1 px-2 rounded-lg disabled:bg-white`}
              id="age"
              name="age"
              type="name"
              value={formData.age}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="user-gender">
            <label className="block m-2 text-gray-500" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={`${
                isEditing ? "border border-gray-300 ms-1.5" : "appearance-none"
              } py-1 px-2 rounded-lg cursor-pointer`}
              disabled={!isEditing}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
              <option value="rather not say">Rather not say</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="user-country">
            <label className="block m-2 text-gray-500" htmlFor="country">
              Country
            </label>
            <input
              className={`${
                isEditing ? "border border-gray-300 ms-1.5" : ""
              } py-1 px-2 rounded-lg disabled:bg-white`}
              id="country"
              name="country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="user-desc w-full">
          <label className="block m-2 text-gray-500" htmlFor="desc">
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

        <FooterButtons
          isEditing={isEditing}
          handleSaveClick={handleSaveClick}
          handleDeleteClick={handleDeleteClick}
          handleCancelClick={handleCancelClick}
          handleEditClick={handleEditClick}
          saveDisabled={!isFormValid || !hasChanges} // Disable save button if form is invalid or unchanged
        />

        {/* Modal */}
        <ConfirmModal
          handleDeleteClick={handleModalConfirm}
          handleCancelClick={handleModalCancel}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default UserAccordion;
