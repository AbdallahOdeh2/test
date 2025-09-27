// components/ui/loading-button.tsx (example)
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function LoadingButton({
  className,
  loading,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <Button
      className={cn("w-full", className)}
      disabled={loading || props.disabled}
      suppressHydrationWarning // Suppress hydration warnings for this button
      {...props}
    >
      {loading ? "Loading..." : props.children}
    </Button>
  );
}
