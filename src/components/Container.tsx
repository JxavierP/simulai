import { JSX, ParentProps, splitProps } from "solid-js";

type ContainerProps = ParentProps<{
  class?: string;
  decoratorColor?: string;
}>;

export default function Container(props: ContainerProps) {
  const [local, rest] = splitProps(props, [
    "children",
    "class",
    "decoratorColor",
  ]);
  const decoratorClass = local.decoratorColor ?? "bg-blue-400";
  return (
    <div class={`relative p-3 border ${local.class ?? ""}`} {...rest}>
      {local.children}
      <div
        class={`absolute w-2 h-2 top-0 left-0 -translate-1/2 ${decoratorClass}`}
      />
      <div
        class={`absolute w-2 h-2 bottom-0 left-0 -translate-x-1/2 translate-y-1/2  ${decoratorClass}`}
      />
      <div
        class={`absolute w-2 h-2 top-0 right-0 translate-1/2 -translate-y-1/2 ${decoratorClass}`}
      />
      <div
        class={`absolute w-2 h-2 bottom-0 right-0 translate-x-1/2 translate-y-1/2 ${decoratorClass}`}
      />
    </div>
  );
}
