import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";

export default function Main() {
  // Mảng danh sách bài học
  const importantContents = [
    "Tổng quan về JavaScript",
    "Biến và kiểu dữ liệu",
    "Câu lệnh điều kiện và vòng lặp",
    "Hàm",
    "Mảng và đối tượng",
    "Bất đồng bộ hóa",
    "Promise và async/await",
    "ES6 và các tính năng mới",
    "DOM và sự kiện",
    "ReactJS và thành phần",
    "State và Props trong React",
    "Redux và quản lý trạng thái",
    "Routing trong React",
    "HTTP Requests và Fetch API",
    "Node.js và Express",
    "Database và MongoDB",
    "RESTful API",
    "Testing",
    "Deployment ứng dụng React",
  ];
  return (
    <>
      <section className="flex" style={{ maxHeight: "calc(100vh - 64px)" }}>
        <menu className="w-[320px] h-full shadow-lg border-r">
          <ul id="list-course" className="px-6 py-3 max-h-full overflow-y-auto">
            {importantContents.map((content, index) => (
              <li
                key={index}
                className="flex gap-2 items-center px-2 py-3 hover:bg-slate-500 hover:text-[#fff] transition-all cursor-pointer rounded-md"
              >
                <CaretRightOutlined />
                {content}
              </li>
            ))}
          </ul>
        </menu>
        <main className="flex-1 p-6 flex items-center justify-center">
          <h1 className="text-[30px]">
            <div className="flex gap-10">
              <img
                className="h-[200px] w-[200px]"
                src="anh-dai-dien-anime-girl_043115928.jpg"
                alt=""
              />
              <img
                className="h-[200px] w-[200px]"
                src="anh-dai-dien-dep-cho-zalo-580x580.jpeg"
                alt=""
              />
            </div>
          </h1>
        </main>
      </section>
    </>
  );
}
