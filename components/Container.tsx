import clsx from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ children, className, ...props }: Props) {
  return (
    <div {...props} className={clsx("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
}
