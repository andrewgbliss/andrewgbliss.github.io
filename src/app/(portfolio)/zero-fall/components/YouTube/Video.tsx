interface Props {
  videoId: string;
  title: string;
}

export default function Video(props: Props) {
  const { title, videoId } = props;
  return (
    <>
      <div className="block xl:hidden">
        <iframe
          style={{
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
      <div className="hidden xl:block">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
