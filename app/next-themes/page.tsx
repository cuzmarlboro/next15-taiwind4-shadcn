/*
 * @LastEditors: hezeying@xdf.cn
 * @Date: 2025-03-20 15:25:37
 * @LastEditTime: 2025-03-20 15:46:52
 * @FilePath: /next15-taiwind4-shadcn/app/next-themes/page.tsx
 * @Description:
 */
"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";

const NextThemes = () => {
  const { theme, setTheme } = useTheme();

  // 获取当前主题色
  const themeColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span className="text-primary">当前主题色：{themeColor}</span>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default NextThemes;
