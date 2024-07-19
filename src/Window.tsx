interface TitleBarOptions {
  minimizable?: boolean;
  maximizable?: boolean;
  closeable?: boolean;
}

interface WindowTitleBarProps {
  title?: string;
  options?: TitleBarOptions;
}

export function MaximizeButton() {
  return <button aria-label="Maximize" />;
}

export function MinimizeButton() {
  return <button aria-label="Minimize" />;
}

export function CloseButton() {
  return <button aria-label="Close" />;
}

export function HelpButton() {
  return <button aria-label="Help" />;
}

export function WindowTitleBar({ title, options = {
  minimizable: true,
  maximizable: true,
  closeable: true,
} }: WindowTitleBarProps) {
  return (
    <div className="title-bar">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        {options?.minimizable && <MinimizeButton />}
        {options?.maximizable && <MaximizeButton />}
        {options?.closeable && <CloseButton />}
      </div>
    </div>
  );
}

interface WindowProps {
  title?: string;
  titleBar?: TitleBarOptions;
  children?: React.ReactNode;
  width?: number;
  height?: number;
}

export function Window({ title, titleBar, children, width, height }: WindowProps) {
  return (
    <div className="window" style={{ margin: 32, width: width, height: height }}>
      {title && <WindowTitleBar title={title} options={titleBar} />}
      {children && <div className="window-body">{children}</div>}
    </div>
  );
}
