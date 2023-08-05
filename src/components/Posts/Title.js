function Title({ loaded }) {
  const titleProperty = Object.values(loaded.properties).find(
    (property) => property.type === "title"
  );
  return titleProperty?.title[0]?.plain_text || "";
}

export default Title;
