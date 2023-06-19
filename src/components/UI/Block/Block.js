import Paragraph from "./Type/Paragraph";

function Block(props) {
  const { blocks } = props;
  const headingRegex = new RegExp("heading*");

  // const getCompoent = (type, item) => {
  //   const headingRegex = new RegExp("heading*");
  //   if (headingRegex.test(type)) {
  //     console.log("이것은 헤딩입니다 = ", type);
  //   }
  //   if (type === "paragraph") {
  //     return <Paragraph id={item.id} richTexts={item.paragraph.rich_text} />;
  //   }
  // };

  // const block = blocks.map((item) => getCompoent(item.type, item));

  return (
    <>
      {blocks.map((item) =>
        headingRegex.test(item.type) ? (
          <div key={item.id}>헤딩</div>
        ) : item.type === "paragraph" ? (
          <Paragraph id={item.id} richTexts={item.paragraph.rich_text} />
        ) : null
      )}
    </>
  );
  // return <div>{block}</div>;
}

export default Block;
