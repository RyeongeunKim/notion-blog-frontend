import { useEffect, useState } from "react";

import classes from "./Text.module.css";

function Text(props) {
  const {
    richText: { annotations, href, plain_text },
  } = props;

  const [style, setStyle] = useState({
    name: "",
    color: "",
  });

  useEffect(() => {
    if (href) return;

    let styleText = "";
    let color = "";

    for (const key in annotations) {
      if (key !== "color" && annotations[key]) {
        const cssProperty = classes[key];
        styleText += styleText ? ` ${cssProperty}` : cssProperty;
      } else if (key === "color" && annotations[key] !== "default") {
        color = annotations[key];
      }
    }

    setStyle((prevState) => ({ ...prevState, name: styleText, color }));

    return () => {
      if (style.name || style.color) {
        setStyle((prevState) => ({ ...prevState, name: "", color: "" }));
      }
    };
  }, []);

  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {plain_text}
        </a>
      ) : style.color ? (
        <div style={{ color: style.color }} className={style.name}>
          {plain_text}
        </div>
      ) : (
        <div className={style.name}>{plain_text}</div>
      )}
    </>
  );
}

export default Text;
