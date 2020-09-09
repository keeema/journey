import * as b from "bobril";

export function FormItem({
  label,
  value,
  onChange,
  onLabelChange,
}: {
  label: string;
  value: number;
  onChange: (newVal: number) => void;
  onLabelChange?: (newVal: string) => void;
}): b.IBobrilNode {
  return (
    <p>
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
        <div>{label}</div>
      )}
    </p>
  );
}
