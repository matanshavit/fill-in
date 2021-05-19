import { useState, useEffect } from "react";

import AddressContext from ".";

const Provider = ({ children }) => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const setInitialAddress = async () => {
    const initialAddress = {
      street: "20 W 34th St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    };
    setAddress(initialAddress);
  };

  useEffect(() => {
    setInitialAddress();
  }, []);

  return (
    <AddressContext.Provider value={{ address }}>
      {children}
    </AddressContext.Provider>
  );
};

export default Provider;
