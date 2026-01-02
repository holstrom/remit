import { cn } from "@/lib/utils";

const LOGO_ICON_SRC =
  "/easyremitsolutions-high-resolution-logo-transparent-icon.png";

type LogoIconProps = {
  className?: string;
  alt?: string;
  loading?: "eager" | "lazy";
};

export const LogoIcon = ({
  className,
  alt = "Easy Remit Solutions icon",
  loading = "eager",
}: LogoIconProps) => {
  return (
    <img
      src={LOGO_ICON_SRC}
      alt={alt}
      className={cn("h-full w-full object-contain", className)}
      loading={loading}
      decoding="async"
      draggable={false}
    />
  );
};
