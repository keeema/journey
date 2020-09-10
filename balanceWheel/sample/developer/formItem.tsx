import * as b from "bobril";

interface IFormItemData {
  label: string;
  value: number;
  description: string;
  onChange: (newVal: number) => void;
  onLabelChange?: (newVal: string) => void;
}

export function FormItem({
  label,
  value,
  description,
  onChange,
  onLabelChange,
}: IFormItemData): b.IBobrilNode {
  return (
    <>
      <p style={{ display: "flex" }}>
        <input
          type="number"
          value={value}
          min="0"
          max="10"
          onChange={(val) => onChange(parseInt(val, 10))}
        />
        {onLabelChange ? (
          <input
            type="text"
            value={label}
            onChange={(val) => onLabelChange(val)}
          />
        ) : (
          <strong style={{ paddingLeft: 10 }}>{label}</strong>
        )}
      </p>
      <p>{description.length ? description : <br />}</p>
    </>
  );
}
