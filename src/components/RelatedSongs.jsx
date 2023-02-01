import SongBar from './SongBar';

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  hanldePlayClick,
}) => {
  <div className="flex flex-col">
    <h1 className="font-bol text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBar
          key={`${artistId}-${song.key}-${i}`}
          song={song}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={hanldePlayClick}
        />
      ))}
    </div>
  </div>;
};

export default RelatedSongs;
