# eTax Mobile - Ứng dụng Quản lý Thuế

## 📱 Giới thiệu

Đây là ứng dụng web **eTax Mobile** - một Progressive Web App (PWA) giúp người dùng quản lý các thủ tục thuế trực tuyến.

**Mục đích**: Clone lại giao diện từ ứng dụng mobile gốc thành phiên bản web, giúp người dùng có thể truy cập trên trình duyệt và cài đặt như app trên điện thoại.

## 🎯 Tính năng chính

- ✅ **Đăng nhập/Đăng xuất**: Xác thực bằng MST (Mã số thuế) và mật khẩu
- ✅ **Trang chủ**: Hiển thị menu và các chức năng chính
- 🚧 **16 trang chức năng**: 
  - Hóa đơn điện tử
  - Khai thuế
  - Đăng ký thuế
  - Hỗ trợ quyết toán thuế TNCN
  - Tra cứu nghĩa vụ thuế
  - Và nhiều chức năng khác...

## 📂 Cấu trúc thư mục

```
html-version/
├── assets/              # Ảnh, icon, logo (đã chuyển sang webp)
├── css/                 # File CSS
│   ├── common.css      # CSS chung cho toàn bộ app
│   ├── home.css        # CSS cho trang chủ
│   ├── login.css       # CSS cho trang đăng nhập
│   └── pages/          # CSS cho từng trang chức năng
├── js/                  # File JavaScript
│   ├── auth.js         # Xử lý đăng nhập/đăng xuất
│   ├── utils.js        # Các hàm tiện ích
│   ├── firebase-config.js  # Cấu hình Firebase
│   └── pages/          # JS cho từng trang chức năng
├── pages/               # Các trang HTML chức năng
├── reference-images/    # Ảnh chụp màn hình từ app mobile gốc
├── docs/                # Tài liệu
├── index.html           # Trang redirect về login
├── login.html           # Trang đăng nhập
├── home.html            # Trang chủ
├── manifest.json        # Cấu hình PWA
└── sw.js                # Service Worker (cho PWA)
```

## 🚀 Cách chạy project

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Web server (có thể dùng Live Server trong VS Code)

### Cách chạy

1. **Mở project trong VS Code**
2. **Cài đặt Live Server extension** (nếu chưa có)
3. **Click chuột phải vào `index.html`** → Chọn "Open with Live Server"
4. **Hoặc dùng terminal:**
   ```bash
   # Nếu có Python
   python -m http.server 8000
   
   # Nếu có Node.js
   npx serve .
   ```

5. **Mở trình duyệt**: Truy cập `http://localhost:8000`

## 🎨 Màu sắc chính

- **Màu đỏ chủ đạo**: `#C60000` (màu của logo và header)
- **Màu nền**: Trắng (#FFFFFF) cho nội dung, Đen (#000000) cho background
- **Màu chữ**: Đen cho nội dung, Trắng cho text trên nền đỏ

## 📱 Progressive Web App (PWA)

Ứng dụng này là PWA, có nghĩa là:
- ✅ Có thể cài đặt trên điện thoại như app thật
- ✅ Có thể chạy offline (khi đã cache)
- ✅ Có icon trên màn hình chính
- ✅ Có thể gửi thông báo (nếu cần)

## 🔧 Công nghệ sử dụng

- **HTML5**: Cấu trúc trang
- **CSS3**: Styling với CSS Variables
- **JavaScript (ES6+)**: Logic và tương tác
- **Firebase**: Xác thực người dùng (đang setup)
- **PWA**: Service Worker cho offline support

## 📸 Reference Images

Thư mục `reference-images/` chứa 33 ảnh chụp màn hình từ app mobile gốc. Đây là tài liệu tham khảo để clone lại giao diện chính xác.

## 🎯 Trạng thái phát triển

- ✅ **Hoàn thành**: Login, Home, Cấu trúc cơ bản
- 🚧 **Đang phát triển**: 16 trang chức năng
- 📋 **Kế hoạch**: Hoàn thiện tất cả trang, tích hợp API thật

## 👤 Tác giả

**Anh Nghĩa** - Product Owner
**Cipher** - Developer & Mentor

## 📝 Ghi chú

- Project này đang trong giai đoạn phát triển
- Giao diện được clone từ app mobile gốc
- Assets đã được tối ưu hóa (chuyển sang webp)
- Tất cả code được viết bằng tiếng Việt (comments, variables)

---

**Lưu ý**: Đây là phiên bản HTML tĩnh, chưa kết nối với backend thật. Hiện tại đang dùng localStorage để mô phỏng authentication.

---

## 💡 Tại sao chọn phiên bản HTML thuần này?

### So sánh với Etaxfinal (Next.js)

| Tiêu chí | **etax-html-version** (Phiên bản này) | **Etaxfinal** (Next.js) |
|----------|--------------------------------------|-------------------------|
| **Độ phức tạp** | ⭐ Đơn giản | ⭐⭐⭐⭐⭐ Phức tạp |
| **Cần npm?** | ❌ Không cần | ✅ Cần |
| **Cần build?** | ❌ Không cần | ✅ Cần (`npm run build`) |
| **Cách chạy** | Mở file HTML trực tiếp | `npm run dev` |
| **File cấu hình** | Chỉ có `manifest.json` | `package.json`, `next.config.js`, `tsconfig.json`, v.v. |
| **Dễ hiểu** | ✅ Rất dễ - chỉ có HTML/CSS/JS | ❌ Phức tạp - có nhiều file config |

### Ưu điểm của phiên bản HTML thuần

- ✅ **Đơn giản**: Chỉ cần mở file HTML là chạy được
- ✅ **Dễ hiểu**: Không có npm, không có build, không có config phức tạp
- ✅ **Dễ học**: Phù hợp cho người mới học code
- ✅ **Nhanh**: Không cần cài đặt gì, mở là chạy
- ✅ **Rõ ràng**: Cấu trúc đơn giản: `index.html` → `login.html` → `home.html` → các trang con

### Khi nào cần dùng Next.js (Etaxfinal)?

- Khi cần Server-Side Rendering (SSR)
- Khi cần API routes
- Khi cần tối ưu SEO nâng cao
- Khi team đã quen với React/Next.js

**Kết luận**: Phiên bản HTML thuần này phù hợp cho người mới học và muốn hiểu code một cách đơn giản nhất!
