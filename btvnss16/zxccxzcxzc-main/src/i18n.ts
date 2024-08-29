// src/i18n.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Title",
        description: "Description",
      },
    },
    vi: {
      translation: {
        title: "Tiêu đề",
        description: "Mô tả",
      },
    },
  },
  lng: "en", // Ngôn ngữ mặc định
  fallbackLng: "en", // Ngôn ngữ dự phòng
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
