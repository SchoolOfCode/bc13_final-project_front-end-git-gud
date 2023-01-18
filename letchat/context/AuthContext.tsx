import { createContext, useContext, useEffect, useState } from "react";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import { firebaseApp } from "../firebase/firebaseApp";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      async function getRole(uid: string) {
        const userRef = doc(firestoreDB, `users/${uid}`);
        const userCoded = await getDoc(userRef);
        const user = userCoded.data();
        return user;
      }

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

  const signup = (email: string, password: string, role: string, name: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (user) => {
        const { uid } = user.user;
        const userRef = doc(firestoreDB, `users/${uid}`);
        setDoc(userRef, {
          name: name,
          email: email,
          role: role,
        });
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
