import * as b from "bobril";

interface IRadioData<T> {
  name: string;
  label: string;
  value: T;
  currentValue: T;
  onChange: (selected: boolean) => void;
}

export function Radio<T>({
  label,
  value,
  name,
  currentValue,
  onChange,
}: IRadioData<T>): b.IBobrilNode {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={currentValue === value}
        onChange={(val) => onChange(val)}
      />
      <label>{label}</label>
    </>
  );
}
