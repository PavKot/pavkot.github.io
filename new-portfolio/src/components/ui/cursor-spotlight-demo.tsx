import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

export default function CursorSpotlightDemo() {
  return (
    <CursorSpotlight className="h-40 rounded-2xl border">
      <div className="flex h-full items-center justify-center">
        <span className="text-sm text-white/50">
          Move cursor for spotlight
        </span>
      </div>
    </CursorSpotlight>
  );
}
