const UserDetails = ({ isEditing, formData, handleInputChange }) => {
  return (
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
          type="text"
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
  );
};

export default UserDetails;
