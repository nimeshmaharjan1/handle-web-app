import { ThemeProvider } from "@/components/providers/theme.provider";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet></Outlet>
    </ThemeProvider>
  );
};

export default RootLayout;
