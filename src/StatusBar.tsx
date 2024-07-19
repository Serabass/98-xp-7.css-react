interface StatusBarProps {
  fields: React.ReactNode[];
}

export function StatusBar({ fields }: StatusBarProps) {
  return <div className="status-bar">
    {fields.map((field, index) => (
      <p key={index} className="status-bar-field">{field}</p>
    ))}
  </div>;
}