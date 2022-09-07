import React, { useContext, useState } from "react";
import { NFTStorage } from "nft.storage";

export const MusicMetadataContext = React.createContext({});

type MusicMetadataContextProps = {
	children: React.ReactNode;
};

export const MusicMetadataProvider = ({
	children,
}: MusicMetadataContextProps) => {
	const [metadata, setMetadata] = useState({
		version: "0.1",
		name: "",
		description: "",
		image: "",
	});

	const createIpfsMetadata = async ({}) => {
		const STORAGE_API_KEY = process.env["NEXT_PUBLIC_NFT_STORAGE_API_KEY"];
		if (!STORAGE_API_KEY || typeof STORAGE_API_KEY !== "string") {
			throw new Error("Missing NFT Storage API Key");
		}
		const client = new NFTStorage({
			token: STORAGE_API_KEY,
		});
		const ipfs = await client
			.store(metadata)
			.then((response) => response)
			.catch((error) => {
				console.error(error);
				return { error: error.message };
			});
		return ipfs;
	};

	return (
		<MusicMetadataContext.Provider
			value={{ metadata, setMetadata, createIpfsMetadata }}
		>
			{children}
		</MusicMetadataContext.Provider>
	);
};

export const useMusicMetadata = () => useContext(MusicMetadataContext);
