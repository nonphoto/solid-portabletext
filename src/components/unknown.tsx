import type { PortableTextSolidComponents } from "../types";
import { unknownTypeWarning } from "../warnings";

const hidden = { display: "none" };

export const DefaultUnknownType: PortableTextSolidComponents["unknownType"] = ({
  value,
  isInline,
}) => {
  const warning = unknownTypeWarning(value._type);
  return isInline ? (
    <span style={hidden}>{warning}</span>
  ) : (
    <div style={hidden}>{warning}</div>
  );
};

export const DefaultUnknownMark: PortableTextSolidComponents["unknownMark"] = ({
  markType,
  children,
}) => {
  return <span class={`unknown__pt__mark__${markType}`}>{children}</span>;
};

export const DefaultUnknownBlockStyle: PortableTextSolidComponents["unknownBlockStyle"] =
  ({ children }) => {
    return <p>{children}</p>;
  };

export const DefaultUnknownList: PortableTextSolidComponents["unknownList"] = ({
  children,
}) => {
  return <ul>{children}</ul>;
};

export const DefaultUnknownListItem: PortableTextSolidComponents["unknownListItem"] =
  ({ children }) => {
    return <li>{children}</li>;
  };
