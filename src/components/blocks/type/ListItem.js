import Paragraph from "./Paragraph";

function ListItem(props) {
  const { itemList, type } = props;
  
  const map = itemList.map(({ id, richTexts }) => (
    <li key={id}>
      <Paragraph id={id} richTexts={richTexts} />
    </li>
  ));

  return type === "quote" ? <ul>{map}</ul> : <ol>{map}</ol>;
}

export default ListItem;
