import { Box, Button, Spinner, Text } from 'degen'
import { useState } from 'react'
import { toast } from 'react-toastify'
import MusicMetadataForm from '@components/MusicMetadataForm'
import { useMusicMetadata } from 'music-metadata-ipfs'

const CreateMetadataButton = () => {
  const { createIpfsMetadata } = useMusicMetadata()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const ipfs = await createIpfsMetadata()

    if (ipfs?.error) {
      toast.error(ipfs.error)
    } else {
      toast.success(
        <a href={ipfs.url} target="__blank">
          IPFS Metadata Created (view here)
        </a>
      )
    }
    setLoading(false)
  }

  return (
    <Box
      marginBottom="12"
      display="flex"
      flexDirection="column"
      width={{ md: '180' }}
      alignItems="center"
    >
      <Text>Metadata</Text>
      <MusicMetadataForm />

      <Button width="full" disabled={loading} onClick={handleClick}>
        {loading ? <Spinner /> : 'Create Music Metadata'}
      </Button>
    </Box>
  )
}

export default CreateMetadataButton
