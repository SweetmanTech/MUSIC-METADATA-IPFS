import { Box, Input, Text, Textarea } from 'degen'
import { MediaPicker } from '@components/MediaPicker.tsx'
import { useMusicMetadata } from 'music-metadata-ipfs'

const MusicMetadataForm = () => {
  const { metadata, setMetadata } = useMusicMetadata()

  return (
    <>
      <MediaPicker
        id="image"
        compact
        accept="image/jpeg, image/png, image/webp, image/gif"
        label="Song cover image"
        onError={console.error}
        onChange={(e) => setMetadata({ ...metadata, image: e })}
      />
      <MediaPicker
        id="song"
        compact
        maxSize={100}
        accept="audio/wav"
        label="Upload your sound"
        onError={console.error}
        onChange={(e) => {
          const audioMetadata = {
            animation_url: e,
            mimeType: e.type,
          }
          if (audioMetadata.mimeType === 'audio/wav') {
            audioMetadata.losslessAudio = e
          }
          setMetadata({ ...metadata, ...audioMetadata })
        }}
        name="song"
      />
      <Input
        placeholder={metadata.name}
        label="song name"
        onChange={(e) => {
          const nameMetadata = {
            name: e.target.value,
            title: e.target.value,
          }
          setMetadata({ ...metadata, ...nameMetadata })
        }}
      />
      <Input
        placeholder={metadata.artist}
        label="artist name"
        onChange={(e) => {
          const artistMetadata = {
            artist: e.target.value,
            attributes: { ...metadata.attributes, artist: e.target.value },
          }
          setMetadata({ ...metadata, ...artistMetadata })
        }}
      />
      <Textarea
        placeholder={metadata.description}
        label="song description"
        onChange={(e) => setMetadata({ ...metadata, description: e.target.value })}
      />

      <Input
        placeholder={metadata.external_url}
        label="external url (shows up as a link in open sea)"
        onChange={(e) => setMetadata({ ...metadata, external_url: e.target.value })}
      />
      <Input
        placeholder={metadata.duration}
        label="duration"
        step="1"
        min={0}
        suffix="seconds"
        type="number"
        onChange={(e) => setMetadata({ ...metadata, duration: parseInt(e.target.value) })}
      />
      <Input
        placeholder={metadata.trackNumber}
        label="track number"
        step="1"
        min={0}
        type="number"
        onChange={(e) =>
          setMetadata({ ...metadata, trackNumber: parseInt(e.target.value) })
        }
      />
      <Input
        placeholder={metadata.genre}
        label="genre"
        onChange={(e) => {
          const genreMetadata = {
            genre: e.target.value,
            attributes: { ...metadata.attributes, genre: e.target.value },
          }
          setMetadata({ ...metadata, ...genreMetadata })
        }}
      />
      <Input
        placeholder={metadata.bpm}
        label="bpm (beats per minute)"
        step="1"
        min={0}
        type="number"
        onChange={(e) => {
          const bpm = parseInt(e.target.value)
          const bpmMetadata = {
            bpm,
            attributes: { ...metadata.attributes, bpm },
          }
          setMetadata({ ...metadata, ...bpmMetadata })
        }}
      />
      <Input
        placeholder={metadata.key}
        label="key"
        onChange={(e) => {
          const keyMetadata = {
            key: e.target.value,
            attributes: { ...metadata.attributes, key: e.target.value },
          }
          setMetadata({ ...metadata, ...keyMetadata })
        }}
      />
      <Input
        placeholder={metadata.license}
        label="license"
        onChange={(e) => {
          const licenseMetadata = {
            license: e.target.value,
            attributes: { ...metadata.attributes, license: e.target.value },
          }
          setMetadata({ ...metadata, ...licenseMetadata })
        }}
      />
      <Input
        placeholder={metadata.locationCreated}
        label="location created"
        onChange={(e) => setMetadata({ ...metadata, locationCreated: e.target.value })}
      />
      <Input
        placeholder="isrc code from distribution company"
        label="isrc"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            isrc: e.target.value,
          })
        }
      />
      <MediaPicker
        id="artwork"
        compact
        accept="image/jpeg, image/png, image/webp, image/gif"
        label="Track artwork"
        onError={console.error}
        onChange={(e) => {
          const artworkMetadata = {
            uri: e,
            mimeType: e.type,
          }
          setMetadata({
            ...metadata,
            artwork: artworkMetadata,
          })
        }}
      />
      <Textarea
        placeholder="my lyrics"
        label="lyrics"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            lyrics: { text: e.target.value },
          })
        }
      />
      <MediaPicker
        id="visualizer"
        compact
        accept="image/jpeg, image/png, image/webp, image/gif"
        label="Track visualizer"
        onError={console.error}
        onChange={(e) => {
          const visualizerMetadata = {
            uri: e,
            mimeType: e.type,
          }
          setMetadata({
            ...metadata,
            visualizer: visualizerMetadata,
          })
        }}
      />
      <Input
        placeholder="April 20, 2022"
        label="original release date"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            originalReleaseDate: e.target.value,
          })
        }
      />
      <Input
        placeholder="my record label"
        label="record label (track)"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            recordLabel: e.target.value,
          })
        }
      />
      <Input
        placeholder="my publisher"
        label="publisher (track)"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            publisher: e.target.value,
          })
        }
      />
      <Text>Project Metadata</Text>
      <Input
        placeholder={metadata?.project?.title}
        label="project title"
        onChange={(e) => {
          const projectTitleMetadata = {
            project: { ...metadata.project, title: e.target.value },
            attributes: { ...metadata.attributes, project: e.target.value },
          }
          setMetadata({
            ...metadata,
            ...projectTitleMetadata,
          })
        }}
      />
      <MediaPicker
        id="projectArtwork"
        compact
        accept="image/jpeg, image/png, image/webp, image/gif"
        label="Project artwork"
        onError={console.error}
        onChange={(e) => {
          const artworkMetadata = {
            ...metadata.project,
            artwork: {
              uri: e,
              mimeType: e.type,
            },
          }
          setMetadata({
            ...metadata,
            project: artworkMetadata,
          })
        }}
      />
      <Textarea
        placeholder="project description"
        label="project description"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            project: { ...metadata.project, description: e.target.value },
          })
        }
      />
      <Input
        placeholder="Single / EP / Album"
        label="project type"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            project: { ...metadata.project, type: e.target.value },
          })
        }
      />
      <Input
        placeholder="April 20, 2022"
        label="project original release date"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            project: { ...metadata.project, originalReleaseDate: e.target.value },
          })
        }
      />
      <Input
        placeholder="my record label"
        label="project record label"
        onChange={(e) => {
          const projectLabelMetadata = {
            project: { ...metadata.project, recordLabel: e.target.value },
            attributes: { ...metadata.attributes, recordLabel: e.target.value },
          }
          setMetadata({
            ...metadata,
            ...projectLabelMetadata,
          })
        }}
      />
      <Input
        placeholder="my publisher"
        label="project publisher"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            project: { ...metadata.project, publisher: e.target.value },
          })
        }
      />
      <Input
        placeholder="upc code from distribution company"
        label="project upc"
        onChange={(e) =>
          setMetadata({
            ...metadata,
            project: { ...metadata.project, upc: e.target.value },
          })
        }
      />
      <Box marginBottom="12"></Box>
    </>
  )
}

export default MusicMetadataForm
