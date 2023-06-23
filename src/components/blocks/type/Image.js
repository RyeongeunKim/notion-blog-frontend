function Image(props) {
  const { image } = props;

  const type = image.type;
  const url = image[type].url;

  return <img src={url} alt="iamge" />;
}

export default Image;
