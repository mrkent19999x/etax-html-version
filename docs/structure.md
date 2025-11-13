# Cấu trúc Thư mục - eTax Mobile

## Tổng quan

Tài liệu này mô tả cấu trúc thư mục của dự án eTax Mobile sau khi đã được tổ chức lại cho gọn gàng và dễ quản lý.

---

## Cấu trúc thư mục

```
html-version/
├── assets/                    # Tài nguyên tĩnh (ảnh, icon, v.v.)
│   ├── logo-192.webp
│   ├── avatar.webp
│   ├── icon1.webp
│   ├── index1.webp
│   └── ... (các file assets khác)
│
├── css/                       # Tất cả file CSS
│   ├── common.css            # CSS chung (reset, variables, utilities)
│   ├── home.css              # CSS cho trang chủ
│   ├── login.css             # CSS cho trang đăng nhập
│   └── pages/                # CSS cho các trang con
│       ├── hoa-don-dien-tu.css
│       ├── khai-thue.css
│       ├── dang-ky-thue.css
│       └── ... (16 file CSS khác)
│
├── js/                        # Tất cả file JavaScript
│   ├── auth.js               # Xử lý authentication
│   ├── utils.js              # Các hàm tiện ích
│   ├── firebase-config.js    # Cấu hình Firebase
│   ├── home.js               # JavaScript cho trang chủ
│   ├── login.js              # JavaScript cho trang đăng nhập
│   └── pages/                # JavaScript cho các trang con
│       ├── hoa-don-dien-tu.js
│       ├── khai-thue.js
│       ├── dang-ky-thue.js
│       └── ... (16 file JS khác)
│
├── pages/                     # Các trang HTML con
│   ├── hoa-don-dien-tu.html
│   ├── khai-thue.html
│   ├── dang-ky-thue.html
│   └── ... (16 file HTML khác)
│
├── docs/                      # Tài liệu
│   ├── user-flow-checklist.md # Checklist luồng điều hướng
│   └── structure.md           # File này
│
├── reference-images/          # Ảnh tham khảo từ app gốc
│   ├── IMG_0317.JPG
│   ├── IMG_0318.JPG
│   └── ... (32 ảnh + 1 video)
│
├── index.html                 # Trang redirect về login
├── login.html                 # Trang đăng nhập
├── home.html                  # Trang chủ
└── manifest.json              # PWA manifest
```

---

## Chi tiết từng thư mục

### 1. `/css/` - Stylesheets

**Mục đích**: Chứa tất cả file CSS của ứng dụng

**Cấu trúc**:
- `common.css`: CSS chung cho toàn bộ ứng dụng
  - CSS Reset
  - CSS Variables (Design Tokens)
  - Utilities classes
  - Base styles
  
- `home.css`: CSS riêng cho trang chủ
  - Sidebar styles
  - Header styles
  - Profile card
  - Feature sections
  
- `login.css`: CSS riêng cho trang đăng nhập
  - Login form
  - Input styles
  - Button styles
  - Bottom navigation

- `pages/*.css`: CSS riêng cho từng trang con
  - Mỗi trang có 1 file CSS tương ứng
  - Tổng cộng 16 file CSS

**Quy tắc import trong HTML**:
```html
<!-- Trang root (home.html, login.html) -->
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href="css/home.css">  <!-- hoặc login.css -->

<!-- Trang con (pages/*.html) -->
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/pages/ten-trang.css">
```

---

### 2. `/js/` - JavaScript

**Mục đích**: Chứa tất cả file JavaScript của ứng dụng

**Cấu trúc**:
- `auth.js`: Xử lý authentication
  - `loginUserByMst()`
  - `getUserSession()`
  - `logoutUser()`
  - `isAuthenticated()`
  - `getProfile()`

- `utils.js`: Các hàm tiện ích
  - `navigateTo()`
  - `showError()`
  - `hideError()`
  - `requireAuth()`
  - `setViewportHeight()`
  - `getSafeAreaInsets()`

- `firebase-config.js`: Cấu hình Firebase

- `home.js`: JavaScript cho trang chủ
  - Load user data
  - Setup sidebar
  - Setup header
  - Populate menu

- `login.js`: JavaScript cho trang đăng nhập
  - Setup login form
  - Password toggle
  - Viewport height handling

- `pages/*.js`: JavaScript cho từng trang con
  - Mỗi trang có 1 file JS tương ứng
  - Tổng cộng 16 file JS

**Quy tắc import trong JS**:
```javascript
// Trong js/home.js hoặc js/login.js
import { ... } from './auth.js';
import { ... } from './utils.js';

// Trong js/pages/*.js
import { requireAuth } from '../utils.js';
```

**Quy tắc import trong HTML**:
```html
<!-- Trang root (home.html, login.html) -->
<script type="module" src="js/home.js"></script>
<!-- hoặc -->
<script type="module" src="js/login.js"></script>

<!-- Trang con (pages/*.html) -->
<script type="module" src="../js/pages/ten-trang.js"></script>
```

---

### 3. `/pages/` - Trang HTML con

**Mục đích**: Chứa các trang HTML con của ứng dụng

**Cấu trúc**:
- Mỗi trang có 3 file tương ứng:
  - `ten-trang.html` (trong `/pages/`)
  - `ten-trang.css` (trong `/css/pages/`)
  - `ten-trang.js` (trong `/js/pages/`)

**Danh sách 16 trang**:
1. `hoa-don-dien-tu.html` - Hóa đơn điện tử
2. `khai-thue.html` - Khai thuế
3. `dang-ky-thue.html` - Đăng ký thuế
4. `ho-tro-quyet-toan.html` - Hỗ trợ quyết toán thuế TNCN
5. `nhom-chuc-nang-nop-thue.html` - Nhóm chức năng nộp thuế
6. `tra-cuu-nghia-vu-thue.html` - Tra cứu nghĩa vụ thuế
7. `thong-bao.html` - Tra cứu thông báo
8. `tien-ich.html` - Tiện ích
9. `ho-tro.html` - Hỗ trợ
10. `thiet-lap-ca-nhan.html` - Thiết lập cá nhân
11. `thong-tin-tai-khoan.html` - Thông tin tài khoản
12. `tra-cuu-thong-tin-nguoi-phu-thuoc.html` - Tra cứu thông tin người phụ thuộc
13. `ho-so-dang-ky-thue.html` - Hồ sơ đăng ký thuế
14. `ho-so-quyet-toan-thue.html` - Hồ sơ quyết toán thuế
15. `tra-cuu-chung-tu.html` - Tra cứu chứng từ

**Quy tắc đường dẫn**:
- Tất cả trang con đều có nút "Quay lại" → `../home.html`
- CSS: `../css/common.css` + `../css/pages/ten-trang.css`
- JS: `../js/pages/ten-trang.js`

---

### 4. `/assets/` - Tài nguyên tĩnh

**Mục đích**: Chứa các file tài nguyên tĩnh (ảnh, icon, v.v.)

**Cấu trúc**:
- Logo: `logo-192.webp`, `logo.webp`
- Icons: `icon1.webp`, `icon2.webp`, ...
- Service icons: `index1.webp`, `index2.webp`, ...
- Backgrounds: `bglogin.webp`, `backgrounftd.webp`
- Sidebar assets: `sidebar/slidebg.webp`, `sidebar/nen.webp`
- SVG icons: `icon-eye.svg`, `icon-eye-closed.svg`, ...

**Quy tắc đường dẫn**:
- Từ root: `assets/ten-file.webp`
- Từ pages: `../assets/ten-file.webp`

---

### 5. `/docs/` - Tài liệu

**Mục đích**: Chứa các file tài liệu của dự án

**Cấu trúc**:
- `user-flow-checklist.md`: Checklist luồng điều hướng người dùng
- `structure.md`: File này - mô tả cấu trúc thư mục

---

## Lợi ích của cấu trúc mới

### ✅ Tổ chức rõ ràng
- CSS được nhóm trong `/css/`
- JS được nhóm trong `/js/`
- Dễ tìm và quản lý file

### ✅ Dễ bảo trì
- Mỗi trang có 3 file tương ứng (HTML, CSS, JS) với tên giống nhau
- Dễ dàng thêm/sửa/xóa trang mới
- Import paths nhất quán

### ✅ Tách biệt concerns
- Common CSS/JS tách riêng
- Page-specific CSS/JS trong thư mục riêng
- Dễ dàng tối ưu hóa và cache

### ✅ Scalable
- Dễ dàng mở rộng thêm trang mới
- Cấu trúc có thể mở rộng mà không làm rối
- Dễ dàng refactor

---

## Quy tắc đặt tên

### File HTML
- Root level: `login.html`, `home.html`, `index.html`
- Pages: `ten-trang.html` (kebab-case, tiếng Việt không dấu)

### File CSS
- Root level: `home.css`, `login.css`
- Common: `common.css`
- Pages: `ten-trang.css` (trong `css/pages/`)

### File JavaScript
- Root level: `home.js`, `login.js`
- Utilities: `auth.js`, `utils.js`, `firebase-config.js`
- Pages: `ten-trang.js` (trong `js/pages/`)

### Quy tắc chung
- Tên file phải khớp giữa HTML, CSS, JS
- Sử dụng kebab-case (dấu gạch ngang)
- Tiếng Việt không dấu
- Mô tả rõ ràng chức năng

---

## Cách thêm trang mới

### Bước 1: Tạo file HTML
```bash
# Tạo file trong pages/
touch pages/ten-trang-moi.html
```

### Bước 2: Tạo file CSS
```bash
# Tạo file trong css/pages/
touch css/pages/ten-trang-moi.css
```

### Bước 3: Tạo file JavaScript
```bash
# Tạo file trong js/pages/
touch js/pages/ten-trang-moi.js
```

### Bước 4: Cập nhật HTML
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <link rel="stylesheet" href="../css/common.css">
  <link rel="stylesheet" href="../css/pages/ten-trang-moi.css">
</head>
<body>
  <!-- Nội dung -->
  <script type="module" src="../js/pages/ten-trang-moi.js"></script>
</body>
</html>
```

### Bước 5: Cập nhật JavaScript
```javascript
// js/pages/ten-trang-moi.js
import { requireAuth } from '../utils.js';

document.addEventListener('DOMContentLoaded', async () => {
  await requireAuth('../login.html');
  // Code của trang
});
```

### Bước 6: Thêm vào navigation
- Cập nhật `js/home.js` để thêm vào sidebar menu hoặc danh sách dịch vụ

---

## Lưu ý quan trọng

1. **Đường dẫn tương đối**: Luôn sử dụng đường dẫn tương đối, không dùng đường dẫn tuyệt đối
2. **Import paths**: Kiểm tra kỹ đường dẫn import trong JS để tránh lỗi
3. **CSS Variables**: Sử dụng CSS variables từ `common.css` để đảm bảo consistency
4. **Authentication**: Tất cả trang (trừ login) đều cần check authentication
5. **Back navigation**: Tất cả trang con đều có nút "Quay lại" về home

---

## Cập nhật
- **Ngày tạo**: $(date)
- **Phiên bản**: 1.0
- **Tổng số trang**: 19 (3 root + 16 pages)

