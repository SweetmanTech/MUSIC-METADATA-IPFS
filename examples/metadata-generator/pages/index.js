import CreatePage from '@components/CreatePage/CreatePage'
import { MusicMetadataProvider } from 'music-metadata-ipfs'

const Create = () => {
  return (
    <MusicMetadataProvider>
      <CreatePage />
    </MusicMetadataProvider>
  )
}

export default Create
