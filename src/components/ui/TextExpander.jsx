import { useState } from "react";

export function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  className = "",
  expanded = false,
  buttonColor = "#1F09cd",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const buttonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
    fontWeight: "500",
  };

  const words = children.split(" ");
  const shouldTruncate = words.length > collapsedNumWords;
  const displayText = isExpanded
    ? children
    : shouldTruncate
    ? words.slice(0, collapsedNumWords).join(" ") + "..."
    : children;

  return (
    <div className={className}>
      <span>{displayText}</span>
      {shouldTruncate && (
        <button
          style={buttonStyle}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      )}
    </div>
  );
}
