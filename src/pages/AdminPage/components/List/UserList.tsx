import React, { FC } from "react";

import { IUser } from "../../../../types/usersTypes/usersTypes";

interface UserListProps {
  userList: IUser[];
}

const UserList: FC<UserListProps> = ({ userList }) => {
  return (
    <ul>
      {userList.map((item: IUser) => {
        return (
          <li key={item.user_id}>
            <strong>{item.user_first_name}</strong>
            <span>{item.price}</span>
            <span>{item.amount}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
