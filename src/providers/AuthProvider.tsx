import { createContext, FC, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../components/addPost/types";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { users } from "../components/layout/sidebar/UserItems/dataUsers";

interface IContext {
  user: IUser;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<any> = ({ children }) => {
  // @ts-ignore
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      setUser(
        authUser
          ? {
              _id: authUser.uid,
              avatar: users[1].avatar,
              name: authUser?.displayName || "",
            }
          : null
      );
    });
    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
    }),
    [user, ga]
  );

  // @ts-ignore
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export class AudioContext {}
