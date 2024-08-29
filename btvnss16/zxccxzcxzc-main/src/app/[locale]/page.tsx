// app/[locale]/page.tsx
"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const { locale } = params;
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setSelectedLocale(newLocale);

    // Thay đổi ngôn ngữ và cập nhật URL
    router.push(`/${newLocale}`);
  };

  useEffect(() => {
    // Cập nhật ngôn ngữ khi URL thay đổi
    setSelectedLocale(locale);
  }, [locale]);

  return (
    <div>
      <select value={selectedLocale} onChange={handleChange}>
        <option value="en">Tiếng Anh</option>
        <option value="vi">Tiếng Việt</option>
      </select>

      {/* Nội dung trang */}
      <h1>{selectedLocale === "en" ? "Title" : "Tiêu đề"}</h1>
      <p>{selectedLocale === "en" ? "Description" : "Mô tả"}</p>
    </div>
  );
}
