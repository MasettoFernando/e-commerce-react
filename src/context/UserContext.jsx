import { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebaseConfig';
import { getDocs, collection, query, where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.log('No hay usuario autenticado.');
      setLoading(false); 
      return;
    }

    setLoading(true); // Inicia la carga
    const { email } = currentUser;
    console.log('Usuario email:', email);
    
    const usersCollectionRef = collection(db, 'users');
    const userQuery = query(usersCollectionRef, where('email', '==', email));

    try {
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach(doc => {
        setUser(doc.data());
        console.log(doc.id, ' => ', doc.data());
      });
    } catch (error) {
      console.error('Error al obtener datos de usuario:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData();
      } else {
        setUser(null);
        setLoading(false); 
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const contextValue = { user, loading, logout };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;