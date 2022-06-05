Web Ví Điện Tử

Thành viên nhóm:
51900585 - Nguyễn Huỳnh Tất Đạt
51900029 - Nguyễn Gia Hoàng Đạt
51900587 - Nguyễn Đình Dũng
51900759 - Nguyễn Hoàng Long
51900761 - Phạm Thanh Luận

+ Giới thiệu project
- Đây là project của nhóm 13 - lập trình web nâng cao 2021-2022
- Trang web mô phỏng web app ví điện tử phục vụ cho hai đối tượng user và admin

+ Điều kiện
- Đã cài đặt mongodb, nodejs
- Trình soạn thảo code

+ Hướng dẫn cài đặt
- Giải nén thư mục
- Mở 2 folder client và server trong trình soạn thảo
- Mở terminal ở cả 2 trình soạn thảo đã mở và chạy các lệnh.
* npm i
* npm start
- Mở trình duyệt và tìm kiếm với đường dẫn localhost:3000 (sẽ tốn thời gian một chút do thư viện khá nặng)

+ Cách sử dụng
- User sử dụng ví sẽ tiến hành đăng kí. Sau khi đăng kí thành công sẽ có email gửi tài khoản, mật khẩu và tiến hành đăng nhập
- Admin đăng nhập với tài khoản mặc định admin/123456

+ cách import database
- Khởi chạy mongoDB compass
- Tạo database webadvancedfinal
- Tạo hai collections transactions và users
- Truy cập vào collection vừa tạo, chọn add data -> import file
- Chọn loại file JSON
- Chọn file database tương ứng sau đó chọn import
(ngoài ra server đã được khởi tạo bằng mongoDB cloud, có thể truy cập trực tiếp bằng cách:
- khởi chạy mongoDB compass
- Chọn new connection
- Nhập:
    mongodb+srv://hoangdat6353:admin@usermanager.yayda.mongodb.net/test?authSource=admin&replicaSet=atlas-w3axb1-shard-0&readPreference=primary&ssl=true
    vào ô URI sau đó chọn connect
)