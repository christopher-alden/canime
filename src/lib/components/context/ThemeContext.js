import { createContext } from "react"

export const THEME = {
    dark:{
        primary:"#02010a",
        secondary:"#141414",
        accent: "#fb8500",
        text: "#adb5bd"
    },
    light:{
        primary:"#ffffff",
        secondary:"#f1faee",
        accent: "#fb8500",
        text: "#02010a"
    }
}

export const ThemeContext = createContext(THEME.dark);