import React, { useContext, useState } from "react";
import { NFTStorage } from "nft.storage";

export const MusicMetadataContext = React.createContext({});

export const MusicMetadataProvider = ({ children }) => {
  const [metadata, setMetadata] = useState({ version: "0.1" });
  const [contractMetadata, setContractMetadata] = useState({});

  const createIpfsMetadata = async (overrideMetadata) => {
    const client = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY,
    });
    const ipfs = await client
      .store(overrideMetadata || metadata)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        return { error: error.message };
      });
    return ipfs;
  };

  return (
    <MusicMetadataContext.Provider
      value={{
        metadata,
        setMetadata,
        createIpfsMetadata,
        contractMetadata,
        setContractMetadata,
      }}
    >
      {children}
    </MusicMetadataContext.Provider>
  );
};

export const useMusicMetadata = () => useContext(MusicMetadataContext);
