import React from "react";
import { Button } from "../../atoms";

const AccountsTable = ({
  no,
  firstName,
  lastName,
  username,
  userEmail,
  genderType,
  addressMain,
  addressSecond,
  countryOfOrigin,
  languageSpoken,
  onDeleteAccount,
}) => {
  return (
    <tr>
      <th scope="row">{no}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{username}</td>
      <td>{userEmail}</td>
      <td>{genderType}</td>
      <td>{addressMain}</td>
      <td>{addressSecond}</td>
      <td>{countryOfOrigin}</td>
      <td>{languageSpoken}</td>
      <td>
        <div className="d-flex gap-2">
          <Button buttonClassType="warning">Edit</Button>
          <Button onClickAction={onDeleteAccount} buttonClassType="danger">
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default AccountsTable;
