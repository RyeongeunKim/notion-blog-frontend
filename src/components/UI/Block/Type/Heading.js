function Heading(props) {
  const { heading, type } = props;

  const plainText = heading[type].rich_text[0].plain_text;

  const getHaeadingText = () => {
    switch (type) {
      case "heading_1":
        return <h1>{plainText}</h1>;
      case "heading_2":
        return <h2>{plainText}</h2>;
      case "heading_3":
        return <h3>{plainText}</h3>;
      default:
        return <div>{plainText}</div>;
    }
  };

  const haeadingText = getHaeadingText();

  return haeadingText;
}

export default Heading;
