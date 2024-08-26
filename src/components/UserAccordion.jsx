import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import UserDetails from "./UserDetails";
import UserDescription from "./UserDescription";
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
  const [PrevFormData, setPrevFormData] = useState({});

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

  useEffect(() => {
    const isEmptyField = Object.values(formData).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
    const isChanged = JSON.stringify(formData) !== JSON.stringify(PrevFormData);
    setIsFormValid(!isEmptyField);
    setHasChanges(isChanged);
  }, [PrevFormData, formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "country" && /\d/.test(value)) return;
    if (name === "age" && isNaN(value)) return;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    if (formData.age >= 18) {
      setPrevFormData(formData);
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

  const handleDeleteClick = () => setShowModal(true);
  const handleModalConfirm = () => onDeleteUser(user.id);
  const handleModalCancel = () => setShowModal(false);

  return (
    <div className="accordion py-2 px-4 border border-gray-300 rounded-xl overflow-hidden mb-5">
      <UserHeader
        user={user}
        isEditing={isEditing}
        formData={formData}
        onToggle={onToggle}
        handleInputChange={handleInputChange}
        isOpen={isOpen}
      />
      <div
        className={`accordion-body ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        } grid w-full transition-all duration-500`}
      >
        <UserDetails
          isEditing={isEditing}
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <UserDescription
          isEditing={isEditing}
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <FooterButtons
          isEditing={isEditing}
          handleSaveClick={handleSaveClick}
          handleDeleteClick={handleDeleteClick}
          handleCancelClick={handleCancelClick}
          handleEditClick={handleEditClick}
          saveDisabled={!isFormValid || !hasChanges}
        />
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
