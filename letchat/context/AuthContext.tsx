import { createContext, useContext, useEffect, useState } from "react";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase/firebaseApp";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  getAuth,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

const firestoreDB = getFirestore(firebaseApp);

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      const getRole = async (uid: string) => {
        const userRef = doc(firestoreDB, `users/${uid}`);
        const docSnap = await getDoc(userRef);
        console.log(user);
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          return null;
        }
      };

      if (user) {
        const { uid } = user;
        const role = await getRole(uid);
        setUser({
          uid,
          ...role,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = (
    email: string,
    password: string,
    role: string,
    firstname: string,
    surname: string,
    phonenumber: string
  ) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (user) => {
        const { uid } = user.user;
        const userRef = doc(firestoreDB, `users/${uid}`);
        setDoc(userRef, {
          firstname: firstname,
          surname: surname,

          phonenumber: phonenumber,
          email: email,
          role: role,
        });
        sendEmailVerification(user.user);
      }
    );
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
