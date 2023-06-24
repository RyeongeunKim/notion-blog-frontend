import Paragraph from "./Paragraph";

function ListItem(props) {
  const { itemList, type } = props;

  console.log('컴포넌트 = ', itemList);
  
  const map = itemList.map(({ id, richTexts }) => (
    <li key={id}>
      <Paragraph id={id} richTexts={richTexts} />
    </li>
  ));

  return type === "numbered_list_item"  ? <ol>{map}</ol> : <ul>{map}</ul>;
}

export default ListItem;
