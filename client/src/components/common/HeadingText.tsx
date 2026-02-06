import { HeadingTextProps } from "@/types/global";

export default function HeadingText({ title }: HeadingTextProps) {
  return (
    <div>
      <h2 className="text-[32px] leading-[40px] mb-[40px] font-sans font-semibold">{title}</h2>
    </div>
  );
}
