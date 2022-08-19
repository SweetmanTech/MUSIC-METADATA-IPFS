import { Box, Text } from 'degen'
import CreateMetadataButton from '@components/CreateMetadataButton'

const CreatePage = () => (
  <Box backgroundColor="black" display="flex" flexDirection="column" alignItems="center">
    <Box
      display="flex"
      padding="6"
      marginBottom="12"
      minWidth="full"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>music nfts - Metadata Generator</Text>
    </Box>
    <CreateMetadataButton />
  </Box>
)

export default CreatePage
