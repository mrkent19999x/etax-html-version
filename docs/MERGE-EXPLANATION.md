# Merge Conflict là gì? - Giải thích đơn giản

## Merge là gì?

**Merge** (hợp nhất) giống như việc **ghép 2 bản nhạc lại với nhau**.

### Ví dụ thực tế

Tưởng tượng:
- Anh có 1 file `README.md` trên máy tính (version A)
- Em push 1 file `README.md` lên GitHub (version B)
- Khi anh pull về, Git không biết chọn version nào → **Conflict** (xung đột)

## Merge Conflict là gì?

**Merge Conflict** = Xung đột khi hợp nhất code

### Dấu hiệu nhận biết

Khi mở file, anh sẽ thấy các dấu này:

```
<<<<<<< HEAD
Nội dung từ máy tính của anh
=======
Nội dung từ GitHub
>>>>>>> abc123def456
```

### Giải thích các dấu

- `<<<<<<< HEAD`: Bắt đầu phần code từ máy tính của anh
- `=======`: Ngăn cách giữa 2 phần
- `>>>>>>> abc123`: Kết thúc phần code từ GitHub

## Cách xử lý Merge Conflict

### Bước 1: Xác định phần nào cần giữ

Anh cần quyết định:
- Giữ phần từ máy tính?
- Giữ phần từ GitHub?
- Hoặc giữ cả hai (nhưng sắp xếp lại)?

### Bước 2: Xóa các dấu conflict

Sau khi quyết định, anh cần:
1. Xóa dòng `<<<<<<< HEAD`
2. Xóa dòng `=======`
3. Xóa dòng `>>>>>>> abc123`
4. Giữ lại phần code anh muốn

### Ví dụ cụ thể

**Trước khi sửa:**
```
Đây là README của eTax Mobile
<<<<<<< HEAD

=======
**Lưu ý**: Đây là phiên bản HTML thuần
>>>>>>> abc123
```

**Sau khi sửa:**
```
Đây là README của eTax Mobile

**Lưu ý**: Đây là phiên bản HTML thuần
```

## Tại sao có Merge Conflict?

### Nguyên nhân phổ biến

1. **2 người sửa cùng 1 file**
   - Anh sửa `README.md` trên máy
   - Em sửa `README.md` trên GitHub
   - Khi merge → Conflict!

2. **Sửa file khi đang có thay đổi trên GitHub**
   - Anh đã push code lên GitHub
   - Sau đó em push code khác lên
   - Khi anh pull về → Conflict!

## Cách tránh Merge Conflict

### 1. Luôn pull trước khi push
```bash
git pull origin main
git push origin main
```

### 2. Commit thường xuyên
- Đừng để quá lâu mới commit
- Commit ngay sau khi sửa xong

### 3. Giao tiếp với team
- Báo cho nhau biết đang sửa file nào
- Tránh 2 người sửa cùng 1 file cùng lúc

## Tóm tắt

- **Merge** = Hợp nhất code từ 2 nơi
- **Conflict** = Xung đột khi Git không biết chọn version nào
- **Cách sửa** = Xóa dấu conflict, giữ phần code muốn
- **Cách tránh** = Pull trước khi push, commit thường xuyên

---

**Lưu ý**: Nếu không chắc chắn, hãy hỏi Cipher hoặc người có kinh nghiệm trước khi xóa code!

