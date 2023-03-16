import React, { useState, useEffect } from "react";
import { Button } from "./atoms";
import { AccountsTable, InputText } from "./molecules";

const accountPlaceholder = {
  firstName: "",
  lastName: "",
  username: "",
  userEmail: "",
  gender: "",
  addressMain: "",
  addressSecond: "",
  countryOfOrigin: "",
  languageSpoken: "",
};

const FormAddAccount = () => {
  const [formData, setFormData] = useState({ ...accountPlaceholder });
  const [accounts, setAccounts] = useState([]);
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    const timeStamp = new Date().getTime().toString(16);
    const randomString = Math.random().toString(16).substring(2, 8);
    const uniqueId = `${timeStamp}${randomString}`;
    return uniqueId;
  };

  useEffect(() => {
    const newUID = generateUUID();
    setUuid(newUID);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitNewAccount = (event) => {
    event.preventDefault();

    const newFormData = { ...formData, id: uuid };
    setAccounts([...accounts, newFormData]);

    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      userEmail: "",
      gender: "",
      addressMain: "",
      addressSecond: "",
      countryOfOrigin: "",
      languageSpoken: "",
    });
  };

  const deleteUser = (idx) => {
    const confirmDelete = window.confirm(
      `Are you sure want to delete "` +
        accounts[idx].username +
        `" ? This action can't be reverse!`
    );

    if (confirmDelete) {
      console.log("delete user on index : ", idx);
      const updatedAccounts = [...accounts];
      updatedAccounts.splice(idx, 1);
      setAccounts(updatedAccounts);
    }
  };

  return (
    <>
      <div className="container">
        <form className="pb-4" onSubmit={handleSubmitNewAccount}>
          <div className="row pb-3">
            <div className="col">
              <InputText
                value={formData.firstName}
                inputType="text"
                className="form-control"
                inputName="firstName"
                labelName="First name"
                onInputChange={handleInputChange}
              />
            </div>
            <div className="col">
              <InputText
                inputType="text"
                value={formData.lastName}
                className="form-control"
                inputName="lastName"
                labelName="Last name"
                onInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="pb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <InputText
                inputType="text"
                value={formData.username}
                className="form-control"
                inputName="username"
                onInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className="pb-3">
            <label htmlFor="userEmail" className="form-label">
              Email
            </label>
            <InputText
              inputType="email"
              value={formData.userEmail}
              className="form-control"
              inputName="userEmail"
              onInputChange={handleInputChange}
            />
          </div>
          <div className="pb-3">
            <label htmlFor="genderType" className="form-label">
              Gender
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                name="gender"
                type="radio"
                value="male"
                required
                checked={formData.gender === "male"}
                onChange={handleInputRadioChange}
              />
              <label htmlFor="genderMale" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                required
                name="gender"
                type="radio"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputRadioChange}
              />
              <label htmlFor="genderFemale" className="form-check-label">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                required
                name="gender"
                type="radio"
                value="others"
                checked={formData.gender === "others"}
                onChange={handleInputRadioChange}
              />
              <label htmlFor="genderOthers" className="form-check-label">
                Others
              </label>
            </div>
          </div>
          <div className="pb-3">
            <InputText
              inputType="text"
              value={formData.addressMain}
              className="form-control"
              labelName="Address"
              inputName="addressMain"
              onInputChange={handleInputChange}
            />
          </div>
          <div className="pb-3">
            <label htmlFor="addressSecond" className="form-label">
              Address 2 (optional)
            </label>
            <input
              type="text"
              value={formData.addressSecond}
              className="form-control"
              name="addressSecond"
              onChange={handleInputChange}
            />
          </div>
          <div className="pb-3">
            <label htmlFor="countryOfOrigin" className="form-label">
              Nationality
            </label>
            <select
              value={formData.countryOfOrigin}
              className="form-select"
              name="countryOfOrigin"
              onChange={handleInputChange}
            >
              <option value="" selected disabled>
                Choose Nationality
              </option>
              <option value="Singapore">Singapore</option>
              <option value="Thailand">Thailand</option>
              <option value="China">China</option>
              <option value="U.S.A">U.S.A</option>
              <option value="Indonesia">Indonesia</option>
            </select>
          </div>
          <div className="pb-3">
            <label htmlFor="genderType" className="form-label">
              Language Spoken
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                name="languageSpoken"
                type="checkbox"
                value="bahasa"
                checked={formData.languageSpoken === "bahasa"}
                onChange={handleInputRadioChange}
              />
              <label
                htmlFor="languageSpokenIndonesia"
                className="form-check-label"
              >
                Bahasa Indonesia
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                name="languageSpoken"
                type="checkbox"
                value="english"
                checked={formData.languageSpoken === "english"}
                onChange={handleInputRadioChange}
              />
              <label htmlFor="genderFemale" className="form-check-label">
                English
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                name="languageSpoken"
                type="checkbox"
                value="others"
                checked={formData.languageSpoken === "others"}
                onChange={handleInputRadioChange}
              />
              <label htmlFor="genderOthers" className="form-check-label">
                Others
              </label>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <Button buttonClassType="primary w-50" buttonType="submit">
              Create Account
            </Button>
            {/* <button className="btn btn-primary w-50" type="submit">
              Create Account
            </button> */}
          </div>
        </form>
      </div>
      <div className="container table-responsive mb-4 pb-4">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">UUID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Address 2</th>
              <th scope="col">Nationality</th>
              <th scope="col">Language</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {accounts.length < 1 ? (
              <tr>
                <td colSpan="12" className="text-center py-3">
                  Belum ada data ditambahkan
                </td>
              </tr>
            ) : (
              accounts.map((account, idx) => {
                return (
                  <AccountsTable
                    key={idx}
                    no={account.id}
                    firstName={account.firstName}
                    lastName={account.lastName}
                    username={account.username}
                    userEmail={account.userEmail}
                    genderType={account.gender}
                    addressMain={account.addressMain}
                    addressSecond={account.addressSecond}
                    countryOfOrigin={account.countryOfOrigin}
                    languageSpoken={account.languageSpoken}
                    onDeleteAccount={() => deleteUser(idx)}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormAddAccount;
