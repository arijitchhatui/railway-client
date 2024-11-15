"use client";

import { createContext, useState } from "react";
import { UserProfilesEntity } from "../entities/users.entity";

const emptyUser = {
  userId: "",
  fullName: "",
  user: { email: "" },
  username: "",
} satisfies UserProfilesEntity;

export const UserContext = createContext<
  [UserProfilesEntity, React.Dispatch<React.SetStateAction<UserProfilesEntity>>]
>([emptyUser, () => null]);

export function UserContextWrapper({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserProfilesEntity | null;
}) {
  const [userInfo, setUserInfo] = useState<UserProfilesEntity>(
    user || emptyUser
  );
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      {children}
    </UserContext.Provider>
  );
}
