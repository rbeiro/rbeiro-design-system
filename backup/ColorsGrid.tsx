import { baseColors } from "@rbeiro-ui/tokens";
import { getContrast } from "polished";

interface ColorsGridProps {
  theme: {
    title: string;
    colors: {
      color: string;
    };
    fonts: {
      font: string;
    };
  };
}

export function ColorsGrid({ theme }: ColorsGridProps) {
  if (theme) {
    return Object.entries(theme.colors).map(([key, color]) => {
      return (
        <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "monospace",
              color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      );
    });
  }
  return Object.entries(baseColors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
