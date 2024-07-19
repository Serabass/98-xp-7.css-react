interface DropdownProps {
  options: string[];
}

export function Dropdown({ options }: DropdownProps) {
  return <select>
    {options.map((option, index) => (
      <option key={index}>{option}</option>
    ))}
  </select>;
}