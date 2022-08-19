import React, { useContext, useState } from "react";

export const MusicMetadataContext = React.createContext({});

export const MusicMetadataProvider = ({ children }) => {
  const [metadata, setMetadata] = useState({});

  return (
    <MusicMetadataContext.Provider value={{ metadata, setMetadata }}>
      {children}
    </MusicMetadataContext.Provider>
  );
};

export const useMusicMetadata = () => useContext(MusicMetadataContext);
