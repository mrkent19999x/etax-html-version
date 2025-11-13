# Checklist Luồng Điều Hướng Người Dùng - eTax Mobile

## Tổng quan
Ứng dụng eTax Mobile có **19 trang** với luồng điều hướng chính: **Login → Home → Các trang chức năng**

---

## Danh sách tất cả các trang (19 trang)

### 1. Trang Root Level (3 trang)

| # | Tên trang | File | Mô tả | Trạng thái |
|---|-----------|------|-------|------------|
| 1 | **Đăng nhập** | `login.html` | Trang đăng nhập với MST và mật khẩu | ✅ Hoàn thành |
| 2 | **Trang chủ** | `home.html` | Trang chủ hiển thị menu và chức năng | ✅ Hoàn thành |
| 3 | **Index (Redirect)** | `index.html` | Trang redirect tự động về login | ✅ Hoàn thành |

### 2. Trang trong thư mục Pages (16 trang)

| # | Tên trang | File | Mô tả | Trạng thái |
|---|-----------|------|-------|------------|
| 4 | **Hóa đơn điện tử** | `pages/hoa-don-dien-tu.html` | Quản lý hóa đơn điện tử | 🚧 Đang phát triển |
| 5 | **Khai thuế** | `pages/khai-thue.html` | Khai báo thuế | 🚧 Đang phát triển |
| 6 | **Đăng ký thuế** | `pages/dang-ky-thue.html` | Đăng ký thuế mới | 🚧 Đang phát triển |
| 7 | **Hỗ trợ quyết toán thuế TNCN** | `pages/ho-tro-quyet-toan.html` | Hỗ trợ quyết toán thuế thu nhập cá nhân | 🚧 Đang phát triển |
| 8 | **Nhóm chức năng nộp thuế** | `pages/nhom-chuc-nang-nop-thue.html` | Các chức năng liên quan đến nộp thuế | 🚧 Đang phát triển |
| 9 | **Tra cứu nghĩa vụ thuế** | `pages/tra-cuu-nghia-vu-thue.html` | Tra cứu các nghĩa vụ thuế | 🚧 Đang phát triển |
| 10 | **Tra cứu thông báo** | `pages/thong-bao.html` | Xem các thông báo từ cơ quan thuế | 🚧 Đang phát triển |
| 11 | **Tiện ích** | `pages/tien-ich.html` | Các tiện ích hỗ trợ | 🚧 Đang phát triển |
| 12 | **Hỗ trợ** | `pages/ho-tro.html` | Trang hỗ trợ người dùng | 🚧 Đang phát triển |
| 13 | **Thiết lập cá nhân** | `pages/thiet-lap-ca-nhan.html` | Cài đặt tài khoản cá nhân | 🚧 Đang phát triển |
| 14 | **Thông tin tài khoản** | `pages/thong-tin-tai-khoan.html` | Xem thông tin tài khoản | 🚧 Đang phát triển |
| 15 | **Tra cứu thông tin người phụ thuộc** | `pages/tra-cuu-thong-tin-nguoi-phu-thuoc.html` | Tra cứu thông tin người phụ thuộc | 🚧 Đang phát triển |
| 16 | **Hồ sơ đăng ký thuế** | `pages/ho-so-dang-ky-thue.html` | Xem hồ sơ đăng ký thuế | 🚧 Đang phát triển |
| 17 | **Hồ sơ quyết toán thuế** | `pages/ho-so-quyet-toan-thue.html` | Xem hồ sơ quyết toán thuế | 🚧 Đang phát triển |
| 18 | **Tra cứu chứng từ** | `pages/tra-cuu-chung-tu.html` | Tra cứu các chứng từ thuế | 🚧 Đang phát triển |

---

## Sơ đồ luồng điều hướng

```
┌─────────────────────────────────────────────────────────────┐
│                    LUỒNG ĐIỀU HƯỚNG CHÍNH                    │
└─────────────────────────────────────────────────────────────┘

1. KHỞI ĐỘNG
   └─> index.html (redirect tự động)
       └─> login.html

2. ĐĂNG NHẬP
   login.html
   ├─> Nhập MST + Mật khẩu
   ├─> Đăng nhập thành công
   │   └─> home.html ✅
   ├─> Quên tài khoản/MST (chưa implement)
   ├─> Quên mật khẩu (chưa implement)
   ├─> Đăng nhập bằng VNeID (chưa implement)
   └─> Đăng ký tài khoản mới (chưa implement)

3. TRANG CHỦ (home.html)
   │
   ├─> [Sidebar Menu] - 9 mục:
   │   ├─> Trang chủ (home.html) - quay về trang chủ
   │   ├─> Hoá đơn điện tử → pages/hoa-don-dien-tu.html
   │   ├─> Khai thuế → pages/khai-thue.html
   │   ├─> Đăng ký thuế → pages/dang-ky-thue.html
   │   ├─> Tra cứu nghĩa vụ thuế → pages/tra-cuu-nghia-vu-thue.html
   │   ├─> Tra cứu thông báo → pages/thong-bao.html
   │   ├─> Tiện ích → pages/tien-ich.html
   │   ├─> Hỗ trợ → pages/ho-tro.html
   │   └─> Thiết lập cá nhân → pages/thiet-lap-ca-nhan.html
   │
   ├─> [Chức năng hay dùng] - 4 mục:
   │   ├─> Tra cứu thông tin người phụ thuộc → pages/tra-cuu-thong-tin-nguoi-phu-thuoc.html
   │   ├─> Hồ sơ đăng ký thuế → pages/ho-so-dang-ky-thue.html
   │   ├─> Hồ sơ quyết toán thuế → pages/ho-so-quyet-toan-thue.html
   │   └─> Tra cứu chứng từ thuế → pages/tra-cuu-chung-tu.html
   │
   ├─> [Danh sách nhóm dịch vụ] - 10 mục:
   │   ├─> Hoá đơn điện tử → pages/hoa-don-dien-tu.html
   │   ├─> Khai thuế → pages/khai-thue.html
   │   ├─> Đăng ký thuế → pages/dang-ky-thue.html
   │   ├─> Hỗ trợ quyết toán thuế TNCN → pages/ho-tro-quyet-toan.html
   │   ├─> Nhóm chức năng nộp thuế → pages/nhom-chuc-nang-nop-thue.html
   │   ├─> Tra cứu nghĩa vụ thuế → pages/tra-cuu-nghia-vu-thue.html
   │   ├─> Tra cứu thông báo → pages/thong-bao.html
   │   ├─> Tiện ích → pages/tien-ich.html
   │   ├─> Hỗ trợ → pages/ho-tro.html
   │   └─> Thiết lập cá nhân → pages/thiet-lap-ca-nhan.html
   │
   ├─> [Header Actions]:
   │   ├─> Icon QR Code (chưa implement)
   │   └─> Icon Thông báo → pages/thong-bao.html
   │
   ├─> [Profile Card]:
   │   └─> Icon chỉnh sửa → pages/thong-tin-tai-khoan.html
   │
   └─> [Sidebar Footer]:
       └─> Đăng xuất → logout → login.html

4. CÁC TRANG CON (pages/*.html)
   │
   ├─> Tất cả các trang con đều có:
   │   ├─> Header với nút "Quay lại" → home.html
   │   └─> Nội dung trang (đang phát triển)
   │
   └─> Các trang có thể điều hướng nội bộ (chưa implement)

5. ĐIỀU HƯỚNG NGƯỢC
   └─> Tất cả trang con → Back button → home.html
   └─> home.html → Sidebar Logout → login.html
```

---

## Chi tiết các điểm điều hướng

### A. Từ Login (login.html)
- ✅ **Đăng nhập thành công** → `home.html`
- ⏳ Quên tài khoản (chưa implement)
- ⏳ Quên mật khẩu (chưa implement)
- ⏳ Đăng nhập VNeID (chưa implement)
- ⏳ Đăng ký mới (chưa implement)

### B. Từ Home (home.html)

#### B1. Sidebar Menu (9 mục)
1. Trang chủ → `home.html` (reload)
2. Hoá đơn điện tử → `pages/hoa-don-dien-tu.html`
3. Khai thuế → `pages/khai-thue.html`
4. Đăng ký thuế → `pages/dang-ky-thue.html`
5. Tra cứu nghĩa vụ thuế → `pages/tra-cuu-nghia-vu-thue.html`
6. Tra cứu thông báo → `pages/thong-bao.html`
7. Tiện ích → `pages/tien-ich.html`
8. Hỗ trợ → `pages/ho-tro.html`
9. Thiết lập cá nhân → `pages/thiet-lap-ca-nhan.html`

#### B2. Chức năng hay dùng (4 mục)
1. Tra cứu thông tin người phụ thuộc → `pages/tra-cuu-thong-tin-nguoi-phu-thuoc.html`
2. Hồ sơ đăng ký thuế → `pages/ho-so-dang-ky-thue.html`
3. Hồ sơ quyết toán thuế → `pages/ho-so-quyet-toan-thue.html`
4. Tra cứu chứng từ thuế → `pages/tra-cuu-chung-tu.html`

#### B3. Danh sách nhóm dịch vụ (10 mục)
1. Hoá đơn điện tử → `pages/hoa-don-dien-tu.html`
2. Khai thuế → `pages/khai-thue.html`
3. Đăng ký thuế → `pages/dang-ky-thue.html`
4. Hỗ trợ quyết toán thuế TNCN → `pages/ho-tro-quyet-toan.html`
5. Nhóm chức năng nộp thuế → `pages/nhom-chuc-nang-nop-thue.html`
6. Tra cứu nghĩa vụ thuế → `pages/tra-cuu-nghia-vu-thue.html`
7. Tra cứu thông báo → `pages/thong-bao.html`
8. Tiện ích → `pages/tien-ich.html`
9. Hỗ trợ → `pages/ho-tro.html`
10. Thiết lập cá nhân → `pages/thiet-lap-ca-nhan.html`

#### B4. Header Actions
- Icon QR Code (chưa implement)
- Icon Thông báo → `pages/thong-bao.html`

#### B5. Profile Card
- Icon chỉnh sửa → `pages/thong-tin-tai-khoan.html`

#### B6. Sidebar Footer
- Đăng xuất → `login.html` (sau khi logout)

### C. Từ các trang con (pages/*.html)
- ✅ **Nút Back** → `home.html` (tất cả trang)
- ⏳ Điều hướng nội bộ giữa các trang (chưa implement)

---

## Checklist kiểm tra điều hướng

### ✅ Đã hoàn thành
- [x] Login → Home (sau khi đăng nhập thành công)
- [x] Home → Các trang con (từ sidebar, chức năng hay dùng, danh sách dịch vụ)
- [x] Các trang con → Home (nút Back)
- [x] Home → Login (sau khi đăng xuất)
- [x] Index → Login (redirect tự động)

### ⏳ Chưa implement
- [ ] Login → Quên tài khoản
- [ ] Login → Quên mật khẩu
- [ ] Login → Đăng nhập VNeID
- [ ] Login → Đăng ký mới
- [ ] Home → QR Code Scanner
- [ ] Điều hướng nội bộ giữa các trang con

---

## Ghi chú

1. **Trùng lặp điều hướng**: Một số trang có thể truy cập từ nhiều nơi:
   - `pages/hoa-don-dien-tu.html`: Sidebar + Danh sách dịch vụ
   - `pages/khai-thue.html`: Sidebar + Danh sách dịch vụ
   - `pages/dang-ky-thue.html`: Sidebar + Danh sách dịch vụ
   - `pages/tra-cuu-nghia-vu-thue.html`: Sidebar + Danh sách dịch vụ
   - `pages/thong-bao.html`: Sidebar + Header icon + Danh sách dịch vụ
   - `pages/tien-ich.html`: Sidebar + Danh sách dịch vụ
   - `pages/ho-tro.html`: Sidebar + Danh sách dịch vụ
   - `pages/thiet-lap-ca-nhan.html`: Sidebar + Danh sách dịch vụ

2. **Trang chỉ có 1 điểm truy cập**:
   - `pages/ho-tro-quyet-toan.html`: Chỉ từ Danh sách dịch vụ
   - `pages/nhom-chuc-nang-nop-thue.html`: Chỉ từ Danh sách dịch vụ
   - `pages/thong-tin-tai-khoan.html`: Chỉ từ Profile Card
   - `pages/tra-cuu-thong-tin-nguoi-phu-thuoc.html`: Chỉ từ Chức năng hay dùng
   - `pages/ho-so-dang-ky-thue.html`: Chỉ từ Chức năng hay dùng
   - `pages/ho-so-quyet-toan-thue.html`: Chỉ từ Chức năng hay dùng
   - `pages/tra-cuu-chung-tu.html`: Chỉ từ Chức năng hay dùng

3. **Authentication**: Tất cả trang (trừ login) đều cần kiểm tra authentication, nếu chưa đăng nhập sẽ redirect về `login.html`.

---

## Cập nhật
- **Ngày tạo**: $(date)
- **Tổng số trang**: 19
- **Trang hoàn thành**: 3 (login, home, index)
- **Trang đang phát triển**: 16

