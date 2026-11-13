# Thiên Phong

Website giới thiệu giải pháp nhôm kính kiến trúc của Thiên Phong.

## Cấu trúc

- `home.html` — trang chủ và câu chuyện thương hiệu
- `project.html` — danh mục công trình với bộ lọc loại hình
- `contact.html` — thông tin liên hệ và form tư vấn
- `style.css` — hệ thống giao diện dùng chung, responsive
- `script.js` — menu mobile, form và bộ lọc dự án

Các trang là static HTML và có thể mở trực tiếp trong trình duyệt hoặc triển khai lên bất kỳ static host nào.

## Kết nối form tư vấn với Google Sheets

1. Tạo Google Sheets với các cột: `Thời gian`, `Họ tên`, `Số điện thoại`, `Email`, `Nội dung tư vấn`.
2. Trong Extensions > Apps Script, dán mã xử lý `doPost` nhận JSON và triển khai dưới dạng Web app với quyền truy cập phù hợp.
3. Sao chép URL Web app vào hằng `GOOGLE_SHEETS_ENDPOINT` ở đầu [script.js](script.js), thay cho giá trị `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL`.

Form gửi nội dung JSON bằng `POST` ở chế độ `no-cors`, dùng `text/plain` để tránh preflight trên GitHub Pages; Apps Script vẫn đọc được bằng `JSON.parse(e.postData.contents)`.
