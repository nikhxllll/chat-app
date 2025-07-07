import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    set({ theme });
  },
}));

// import { create } from "zustand";

// export const useThemeStore = create((set) => {
//   const savedTheme = localStorage.getItem("chat-theme") || "coffee";
//   document.documentElement.setAttribute("data-theme", savedTheme); // ✅ sets it on <html>

//   return {
//     theme: savedTheme,
//     setTheme: (theme) => {
//       localStorage.setItem("chat-theme", theme);
//       document.documentElement.setAttribute("data-theme", theme); // ✅ sets it on <html>
//       set({ theme });
//     },
//   };
// });
