# Music NFT IPFS Metadata

Standard for musicians pioneered by [Catalog](https://beta.catalog.works/) & [Mint Songs](https://zora.co/collections/0x2B5426A5B98a3E366230ebA9f95a24f09Ae4a584/93).

Compatible with contracts created by:

- [Catalog](https://beta.catalog.works/)
- [Sound.xyz](https://sound.xyz/)
- [Manifold](https://studio.manifold.xyz/)

```diff
- WARNING: this code is unaudited
```

### Get Started

To add music NFT metadata to your next music NFT drop, just

### install with NPM

`npm i music-metadata-ipfs`

### or install with Yarn

`yarn add music-metadata-ipfs`

### Configure your API key

- set your `.env.local` file with `NEXT_PUBLIC_NFT_STORAGE_API_KEY=YOUR_API_KEY`
- get a free API key from [nft.storage](https://nft.storage/)

### Usage

1. `import { MusicMetadataProvider } from 'music-metadata-ipfs'`
1. wrap your Music Metadata Form in a `<MusicMetadataProvider>`.
1. `import { useMusicMetadata } from 'music-metadata-ipfs'`
1. `const { metadata, setMetadata, createIpfsMetadata } = useMusicMetadata()`
1. modify music metadata: `onChange={(e) => setMetadata({ ...metadata, image: e })}`
1. upload your metadata to IPFS: `const ipfs = await createIpfsMetadata()`
1. take your music metadata to any ERC721 token contract (Catalog, Manifold, Zora, Sound, etc.)

### Example Music NFT:

```
import MusicMetadataForm from '...'
import { MusicMetadataProvider } from 'music-metadata-ipfs'

const MusicNFTMinter = () => {
  return (
    <MusicMetadataProvider>
      <MusicMetadataForm />
    </MusicMetadataProvider>
  )
}

export default MusicNFTMinter
```

- 73 Music NFT attributes stored on chain in your music nft metadata.
  <img width="449" alt="Screen Shot 2022-07-30 at 8 59 39 PM" src="https://user-images.githubusercontent.com/23249402/182004014-a8e7fb11-92b5-44d1-a538-0682611d81c7.png">

### You Newest Tool for Music NFTs (decentralized on IPFS)

- [Your Music NFT Smart Contract (ERC721)](https://mumbai.polygonscan.com/address/0xb7CF570F9a816CEB90b780C324ECcdb6Fa6C722F#code).
- [Your Music NFT in OpenSea](https://testnets.opensea.io/assets/mumbai/0xb7CF570F9a816CEB90b780C324ECcdb6Fa6C722F/1)
- Works out of the box.
- 100% free CC0 technology (MIT License - use this w/o crediting me).

<img width="1440" alt="Screen Shot 2022-07-30 at 9 00 55 PM" src="https://user-images.githubusercontent.com/23249402/182004025-56ee0c37-0502-4677-9da4-b8d0217441a8.png">

### How to deploy

- `yarn build && npm publish`

### Credits:

- kadajett.eth (co-author) - [@JSTechThing](https://twitter.com/JSTechThing)
- [DanielAbalde/NFT-On-Chain-Metadata](https://github.com/DanielAbalde/NFT-On-Chain-Metadata)
- [Zora Editions](https://github.com/ourzora/zora-drops-contracts/blob/main/src/metadata/EditionMetadataRenderer.sol)
- [Nouns DAO #177](https://nouns.wtf/)

### More info

Checkout our [Github](https://github.com/SweetmanTech/MUSIC-METADATA-IPFS) for the latest changes.
