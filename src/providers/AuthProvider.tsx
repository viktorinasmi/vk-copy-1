import { createContext, FC, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../components/addPost/types";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { users } from "../components/layout/sidebar/UserItems/dataUsers";
import { Firestore, getFirestore } from "firebase/firestore";

interface IContext {
  user: IUser;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
  db: Firestore;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<any> = ({ children }) => {
  // @ts-ignore
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser)
        setUser({
          _id: authUser.uid,
          avatar: users[1].avatar,
          name: authUser.displayName || "",
        });
      else {
        setUser(null);
      }
    });
    return () => {
      unListen();
    };
    //eslint-disable-next-line
  }, []);

  const values = useMemo(
    () => ({
      user,
      setUser,
      ga,
      db,
    }),
    [user, ga, db]
  );

  // @ts-ignore
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
