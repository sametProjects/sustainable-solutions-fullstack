"use client";

import { useState } from "react";

const tabs = [
  "Hepsi",
  "Enerji Verimliliği ve Yenilenebilir Enerji",
  "Su Tasarrufu ve Yönetimi",
  "Atık Azaltma ve Geri Dönüşüm",
  "Sürdürülebilir Gıda Üretimi",
  "Sürdürülebilir Ulaşım",
  "İklim Adaptasyonu",
];

const BlogTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ul className="flex items-center justify-center gap-4 width-1/2 text-center mx-auto flex-wrap my-10">
      {tabs.map((tab, idx) => (
        <li
          key={tab}
          className={`border border-content rounded px-2 py-1 cursor-pointer text-sm
                    ${
                      activeTab === idx ? "bg-primary text-surface border-primary" : ""
                    }`}
          onClick={() => setActiveTab(idx)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default BlogTab;
