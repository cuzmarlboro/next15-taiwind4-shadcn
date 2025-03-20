import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="center min-h-screen">
      <Button
        className="cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        测试
      </Button>
    </div>
  );
}
