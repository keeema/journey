import * as b from "bobril";

export function TextBox({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (newVal: number) => void;
}): b.IBobrilNode {
  return (
    <p>
      <input
        type="text"
        value={value}
        onChange={(val) => onChange(val || "")}
      />
      <div>{label}</div>
    </p>
  );
}
