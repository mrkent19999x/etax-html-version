# Hướng dẫn Push Code lên GitHub

## Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào [GitHub.com](https://github.com)
2. Click vào dấu **+** ở góc trên bên phải → Chọn **New repository**
3. Điền thông tin:
   - **Repository name**: `etax-mobile` (hoặc tên anh muốn)
   - **Description**: `eTax Mobile - Progressive Web App for Vietnamese Tax Management`
   - **Visibility**: 
     - ✅ **Public** (nếu muốn ai cũng xem được)
     - ✅ **Private** (nếu muốn giữ riêng tư)
   - **KHÔNG** tích vào "Initialize with README" (vì đã có code rồi)
4. Click **Create repository**

## Bước 2: Lấy URL của Repository

Sau khi tạo xong, GitHub sẽ hiển thị URL. Có 2 loại:
- **HTTPS**: `https://github.com/username/etax-mobile.git`
- **SSH**: `git@github.com:username/etax-mobile.git`

**Khuyến nghị**: Dùng HTTPS (dễ hơn)

## Bước 3: Push Code lên GitHub

Mở terminal trong project và chạy các lệnh sau:

```bash
# Thêm remote repository
git remote add origin https://github.com/username/etax-mobile.git

# Kiểm tra remote đã được thêm chưa
git remote -v

# Push code lên GitHub
git push -u origin main
```

**Lưu ý**: 
- Thay `username` bằng tên GitHub của anh
- Thay `etax-mobile` bằng tên repo anh đã tạo
- Nếu GitHub yêu cầu đăng nhập, anh sẽ cần nhập username và password (hoặc Personal Access Token)

## Bước 4: Xác nhận

Sau khi push thành công, refresh trang GitHub sẽ thấy code đã được upload!

## Lần sau khi có thay đổi

Khi anh sửa code và muốn push lên GitHub:

```bash
# Xem những gì đã thay đổi
git status

# Thêm file đã sửa
git add .

# Commit với message mô tả
git commit -m "Mô tả những gì đã làm"

# Push lên GitHub
git push
```

## Troubleshooting

### Lỗi: "remote origin already exists"
```bash
# Xóa remote cũ
git remote remove origin

# Thêm lại
git remote add origin https://github.com/username/etax-mobile.git
```

### Lỗi: "Authentication failed"
- Kiểm tra username/password
- Hoặc dùng Personal Access Token thay vì password
- Tạo token tại: GitHub Settings → Developer settings → Personal access tokens

### Lỗi: "Permission denied"
- Kiểm tra anh có quyền truy cập repository không
- Kiểm tra URL có đúng không

---

**Tóm tắt**: Tạo repo trên GitHub → Copy URL → `git remote add origin <URL>` → `git push -u origin main`

