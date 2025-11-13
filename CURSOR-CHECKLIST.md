# Checklist Cursor IDE - eTax Mobile Project

## Tổng quan

Đây là checklist các file cần có để Cursor IDE hiểu và hỗ trợ tốt nhất cho project eTax Mobile.

## Các file đã có

### ✅ 1. README.md
**Vị trí**: Project root (`/home/mrkent/html-version/README.md`)

**Mục đích**: 
- Mô tả tổng quan về project
- Hướng dẫn cách chạy project
- Giải thích cấu trúc thư mục
- Trạng thái phát triển

**Ai đọc**: Developer, AI assistant, người mới vào project

---

### ✅ 2. .cursor/rules/project.mdc
**Vị trí**: `.cursor/rules/project.mdc`

**Mục đích**:
- Quy tắc kỹ thuật cho project (MDC format)
- Cấu trúc project, quy tắc đặt tên
- Design system, coding standards
- Quy tắc khi thêm trang mới

**Ai đọc**: AI assistant (Cursor tự động đọc)

**Format**: MDC (Markdown với metadata)

---

### ✅ 3. AGENTS.md
**Vị trí**: Project root (`/home/mrkent/html-version/AGENTS.md`)

**Mục đích**:
- Instructions cho AI assistant về cách làm việc
- Vai trò của AI (Cipher)
- Quy tắc giao tiếp với anh Nghĩa
- Workflow và project context

**Ai đọc**: AI assistant (Cursor tự động đọc)

**Format**: Plain markdown (không có metadata)

---

## So sánh Project Rules vs AGENTS.md

| Tiêu chí | .cursor/rules/project.mdc | AGENTS.md |
|----------|---------------------------|-----------|
| **Format** | MDC (có metadata) | Plain markdown |
| **Nội dung** | Quy tắc kỹ thuật, coding standards | Cách làm việc, giao tiếp, workflow |
| **Mục đích** | Hướng dẫn code như thế nào | Hướng dẫn làm việc với ai, như thế nào |
| **Độ phức tạp** | Có thể có metadata, glob patterns | Đơn giản, dễ đọc |

**Kết luận**: Dùng **cả hai** để có đầy đủ thông tin:
- `project.mdc`: Biết code như thế nào
- `AGENTS.md`: Biết làm việc với ai, như thế nào

---

## Các file khác (tùy chọn)

### docs/structure.md
**Mục đích**: Tài liệu chi tiết về cấu trúc thư mục

### docs/user-flow-checklist.md
**Mục đích**: Checklist luồng điều hướng người dùng

---

## Cách sử dụng

### Cho AI Assistant (Cursor)
Cursor sẽ **tự động đọc** các file này khi:
- Bạn chat với AI
- AI đang làm việc với project
- AI cần hiểu context của project

**Không cần làm gì thêm** - Cursor tự động load!

### Cho Developer
1. Đọc `README.md` để hiểu project
2. Đọc `.cursor/rules/project.mdc` để biết quy tắc code
3. Đọc `AGENTS.md` để biết cách AI sẽ làm việc

---

## Checklist nhanh

- [x] README.md - Mô tả project
- [x] .cursor/rules/project.mdc - Project rules (MDC)
- [x] AGENTS.md - Agent instructions (plain markdown)
- [x] docs/structure.md - Cấu trúc chi tiết (có sẵn)
- [x] docs/user-flow-checklist.md - User flow (có sẵn)

---

## Lưu ý

- Tất cả file này đều **version-controlled** (commit vào git)
- Có thể đặt `AGENTS.md` trong subdirectories nếu cần
- Project rules có thể nested trong `.cursor/rules/` subdirectories
- Cursor tự động merge tất cả rules khi làm việc

---

**Tóm tắt**: Project đã có đầy đủ file cần thiết cho Cursor IDE. AI assistant sẽ tự động đọc và hiểu project để hỗ trợ tốt nhất!

