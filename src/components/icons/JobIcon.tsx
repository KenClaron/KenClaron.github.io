import Icon, { IconType } from "./Icon";

export default function JobIcon(props: IconType) {
  return (
    <Icon {...props}>
      <path d="M7 42q-1.2 0-2.1-.9Q4 40.2 4 39V15q0-1.2.9-2.1.9-.9 2.1-.9h9V7q0-1.2.9-2.1.9-.9 2.1-.9h10q1.2 0 2.1.9.9.9.9 2.1v5h9q1.2 0 2.1.9.9.9.9 2.1v24q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V15H7v24Zm12-27h10V7H19ZM7 39V15v24Z" />
    </Icon>
  );
}
