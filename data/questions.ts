
import type { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: 'Hoạt động nào sau đây có thể khiến việc sử dụng công nghệ số vi phạm đạo đức, pháp luật hoặc thiếu văn hóa?',
    options: [
      'Truy cập mạng xã hội xem tin tức và viết bình luận tiêu cực, xúc phạm người khác.',
      'Sử dụng máy tính để soạn thảo đơn xin việc.',
      'Vẽ biểu đồ cho bài tập toán bằng phần mềm bảng tính.',
      'Mở phần mềm calculator để tính kết quả của một phép tính lũy thừa.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    text: 'Để tìm hiểu thông tin về một sự kiện đang được lan truyền trên các trang mạng xã hội, trang thông tin nào dưới đây được xem là đáng tin cậy nhất?',
    options: [
      'Trang thông tin có địa chỉ kết thúc bằng .gov.vn.',
      'Trang thông tin không thiên vị mà kể toàn bộ câu chuyện.',
      'Trang thông tin có nội dung giống những gì em đang nghĩ.',
      'Trang thông tin có nội dung gây xúc động lòng người.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 3,
    text: 'Hành động nào sau đây là biểu hiện vi phạm đạo đức, pháp luật và thiếu văn hóa?',
    options: [
      'Chụp ảnh chú chó nhỏ nhà em.',
      'Chụp ảnh trong phòng trưng bày ở bảo tàng, nơi có biển không cho phép chụp ảnh.',
      'Chụp ảnh phong cảnh đường phố.',
      'Chụp ảnh hiệu sách em thường mua để gửi cho bạn bè.'
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    text: 'Công cụ tìm kiếm, xử lí và trao đổi thông tin trong môi trường số bao gồm những gì?',
    options: [
      'Internet, trình duyệt, máy tìm kiếm và ứng dụng từ điển.',
      'Phần mềm soạn thảo văn bản, bảng tính điện tử và phần mềm trình chiếu.',
      'Phần mềm xử lí hình ảnh, âm thanh, video và ngôn ngữ tự nhiên.',
      'Tất cả các công cụ trên.'
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 5,
    text: 'Hoạt động nào sau đây có thể khiến việc sử dụng công nghệ số vi phạm đạo đức, pháp luật hoặc thiếu văn hóa?',
    options: [
      'Sử dụng máy tính để soạn thảo đơn xin việc.',
      'Vẽ biểu đồ cho bài tập toán bằng phần mềm bảng tính.',
      'Truy cập mạng xã hội xem tin tức và viết bình luận thiếu văn hóa.',
      'Mở phần mềm calculator để tính kết quả của một phép tính lũy thừa.'
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 6,
    text: '“Cần đảm bảo tính văn hóa, thể hiện được đạo đức và tuân thủ pháp luật khi tạo ra các sản phẩm số, giúp tránh được việc lan truyền thông tin sai trái, đồng thời góp phần tạo ra một xã hội số … và …”. Điền cụm từ thích hợp:',
    options: [
      'hợp pháp / tiến bộ.',
      'hợp pháp / văn minh.',
      'an toàn / hợp pháp.',
      'lành mạnh / hợp pháp.'
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 7,
    text: 'Em chụp một bức hình rất đẹp và khoe với mọi người. Một thời gian sau, em thấy bức hình đó được đăng ở một trang web với tên tác giả là bạn em. Khi đó em sẽ làm gì?',
    options: [
      'Liên lạc với bạn và yêu cầu ghi đúng nguồn.',
      'Không làm gì cả.',
      'Báo cáo với thầy cô giáo và người lớn.',
      'Nói với tất cả mọi người về điều đó.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 8,
    text: '“… tự động thay đổi khi sao chép công thức nhưng vẫn giữ nguyên vị trí tương đối giữa công thức và ô có địa chỉ trong công thức”. Điền cụm từ thích hợp:',
    options: ['Địa chỉ tương đối.', 'Địa chỉ tuyệt đối.'],
    correctAnswerIndex: 0,
  },
  {
    id: 9,
    text: '“… không thay đổi khi sao chép công thức”. Điền cụm từ thích hợp:',
    options: ['Địa chỉ tương đối.', 'Địa chỉ tuyệt đối.'],
    correctAnswerIndex: 1,
  },
  {
    id: 10,
    text: '“Địa chỉ tuyệt đối có kí hiệu … trước … và trước …”. Điền cụm từ thích hợp:',
    options: [
      'tên cột, tên hàng, $.',
      'tên cột, $, tên hàng.',
      'tên hàng, tên cột, $.',
      '$, tên cột, tên hàng.'
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 11,
    text: 'Kí hiệu nào sau đây được dùng để chỉ định địa chỉ tuyệt đối trong công thức?',
    options: ['#.', '$.', '&.', '@.'],
    correctAnswerIndex: 1,
  },
  {
    id: 12,
    text: 'Cách nhập kí hiệu $ cho địa chỉ tuyệt đối là:',
    options: [
      'Gõ kí hiệu $ từ bàn phím khi nhập địa chỉ ô.',
      'Nhấn phím F4 sau khi nhập địa chỉ tương đối.',
      'Nhấn phím F2.',
      'Thực hiện được theo cả hai cách A và B.'
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 13,
    text: 'Cách chuyển địa chỉ tương đối trong công thức thành địa chỉ tuyệt đối là nhấn phím:',
    options: ['$.', 'F4.', 'F2.', 'F6.'],
    correctAnswerIndex: 1,
  },
  {
    id: 14,
    text: 'Công thức tại ô F5 là =E5*$F$2. Sao chép công thức này đến ô F6, kết quả sao chép là:',
    options: ['=E6*F3.', '=E6*$F$2.', '=$E$6*F3.', '=$E$6*$F$2.'],
    correctAnswerIndex: 1,
  },
  {
    id: 15,
    text: 'Công thức tại ô C1 là =A1*B1. Sao chép công thức trong ô C1 vào ô E2 thì công thức tại ô E2 sau khi sao chép là:',
    options: ['=C1*D2.', '=C2*D1.', '=C2*D2.', '=B2*C2.'],
    correctAnswerIndex: 2,
  },
  {
    id: 16,
    text: 'Biết công thức tại ô D3 là =B3*C3. Sao chép công thức đến ô E2. Khi đó ô E2 có công thức là:',
    options: ['=B3*C3.', '=C2*D2.', '=B2*C2.', '=C3*D3.'],
    correctAnswerIndex: 2,
  },
  {
    id: 17,
    text: 'Biết công thức tại ô C1 là =A1*B1. Sao chép công thức đến ô C5. Khi đó ô C5 có công thức là:',
    options: ['=A5*B5.', '=A1*B1.', '=B5*D5.', '=A5*D5.'],
    correctAnswerIndex: 0,
  },
  {
    id: 18,
    text: 'Biết công thức tại ô F4 là =D4*$F$2. Sao chép công thức đến ô F6. Khi đó ô F6 có công thức là:',
    options: ['=D4*$F$2.', '=D6*$F$2.', '=D4*$F$6.', '=D6*$F$6.'],
    correctAnswerIndex: 1,
  },
  {
    id: 19,
    text: 'Biết công thức tại ô D3 là =$A$3*C3. Sao chép công thức đến ô E2. Khi đó ô E2 có công thức là:',
    options: ['=$A$3*C3.', '=$A$2*D2.', '=$A$2*C2.', '=$A$3*D2.'],
    correctAnswerIndex: 3,
  },
  {
    id: 20,
    text: 'Công thức trong ô E5 là =$A$1*C5. Sao chép ô này đến ô E18. Khi đó, ô E18 có công thức là:',
    options: ['=$A$1*C18.', '=$A$1*C5.', '=$A$18*C5.', '=$A$18*C18.'],
    correctAnswerIndex: 0,
  },
  {
    id: 21,
    text: 'Thứ tự các bước đúng để thực hiện sắp xếp dữ liệu trong Excel là gì?',
    options: [
      'Chọn vùng -> Thẻ Data -> Sort -> OK.',
      'Thẻ Data -> Sort -> Chọn vùng -> OK.',
      'Chọn vùng -> Thẻ Insert -> Sort -> OK.',
      'Chọn vùng -> Thẻ Data -> Filter -> OK.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 22,
    text: 'Thứ tự các bước đúng để thực hiện lọc dữ liệu trong Excel là gì?',
    options: [
      'Chọn vùng -> Thẻ Data -> Filter -> Thực hiện lọc.',
      'Thẻ Data -> Filter -> Chọn vùng -> Thực hiện lọc.',
      'Chọn vùng -> Thẻ Insert -> Filter -> Thực hiện lọc.',
      'Thực hiện lọc -> Chọn vùng -> Thẻ Data -> Filter.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 23,
    text: '“Chức năng … của phần mềm bảng tính được sử dụng để chọn và chỉ hiển thị các dòng thỏa mãn các điều kiện nào đó”. Điền từ thích hợp:',
    options: ['Sắp xếp dữ liệu.', 'Lọc dữ liệu.', 'Tạo biểu đồ.', 'Tạo danh sách.'],
    correctAnswerIndex: 1,
  },
  {
    id: 24,
    text: 'Chọn nút lệnh nào trong thẻ Data, tại nhóm Sort & Filter để thực hiện sắp xếp các cột dữ liệu theo thứ tự bảng chữ cái?',
    options: ['Nút lệnh Sort (A-Z).', 'Nút lệnh Filter.', 'Nút lệnh Clear.', 'Nút lệnh Reapply.'],
    correctAnswerIndex: 0,
  },
  {
    id: 25,
    text: 'Chọn nút lệnh nào trong thẻ Data, tại nhóm Sort & Filter để thực hiện lọc dữ liệu?',
    options: ['Nút lệnh Sort.', 'Nút lệnh Filter (hình phễu).', 'Nút lệnh Advanced.', 'Nút lệnh Text to Columns.'],
    correctAnswerIndex: 1,
  },
  {
    id: 26,
    text: 'Trong chương trình bảng tính, sau khi thực hiện lệnh sắp xếp dữ liệu theo chiều tăng dần, thứ tự nào đúng?',
    options: ['A010 - A100 - A011.', 'A010 - A011 - A100.', 'A100 - A010 - Α011.', 'A011 - A010 - A100.'],
    correctAnswerIndex: 1,
  },
  {
    id: 27,
    text: 'Để sắp xếp theo hai tiêu chí Tên và Họ đệm tăng dần trong hộp thoại Sort, ta cần nhấn nút nào?',
    options: ['Add Level.', 'Delete Level.', 'Copy Level.', 'Options.'],
    correctAnswerIndex: 0,
  },
  {
    id: 28,
    text: 'Nếu hai người cùng tên "Hà", sau khi sắp xếp Tên tăng dần và Họ đệm tăng dần, thứ tự dựa vào đâu?',
    options: [
      'Họ đệm bắt đầu bằng chữ cái đứng trước sẽ đứng trước.',
      'Họ đệm dài hơn đứng trước.',
      'Họ đệm ngắn hơn đứng trước.',
      'Thứ tự không đổi so với ban đầu.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 29,
    text: 'Thao tác lọc danh sách học sinh Nữ được thực hiện như thế nào?',
    options: [
      'Tại cột Giới tính, bỏ chọn "Nam", chỉ giữ chọn "Nữ".',
      'Tại cột Họ đệm, gõ chữ "Nữ".',
      'Tại cột Tên, gõ chữ "Nữ".',
      'Sử dụng lệnh sắp xếp.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 30,
    text: 'Để lọc danh sách học sinh sinh tháng 4, ta sử dụng tính năng nào trong Filter?',
    options: [
      'Date Filters -> All Dates in Period -> April.',
      'Text Filters -> Equals -> 4.',
      'Number Filters -> Greater than -> 4.',
      'Sắp xếp Ngày sinh.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 31,
    text: 'Kết quả sau khi lọc "Giới tính: Nữ" và "Tháng sinh: 4" là gì?',
    options: [
      'Tất cả học sinh Nữ.',
      'Tất cả học sinh sinh tháng 4.',
      'Chỉ những học sinh Nữ có ngày sinh trong tháng 4.',
      'Học sinh Nam sinh tháng 4.'
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 32,
    text: '“Cần sử dụng loại … phù hợp với mục đích của việc biểu diễn và thể hiện dữ liệu”. Điền từ thích hợp:',
    options: ['Biểu đồ.', 'Bảng tính.', 'Văn bản.', 'Hình ảnh.'],
    correctAnswerIndex: 0,
  },
  {
    id: 33,
    text: 'Loại biểu đồ nào rất hữu ích trong trường hợp cần so sánh các phần với tổng thể?',
    options: ['Biểu đồ cột.', 'Biểu đồ đoạn thẳng.', 'Biểu đồ hình quạt tròn.', 'Biểu đồ vùng.'],
    correctAnswerIndex: 2,
  },
  {
    id: 34,
    text: 'Chọn nút lệnh nào trong thẻ Insert, tại nhóm Charts để thực hiện tạo biểu đồ cột?',
    options: [
      'Insert Column or Bar Chart.',
      'Insert Pie or Doughnut Chart.',
      'Insert Line or Area Chart.',
      'Insert Scatter Chart.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 35,
    text: 'Chọn nút lệnh nào trong thẻ Insert, tại nhóm Charts để thực hiện tạo biểu đồ hình quạt tròn?',
    options: ['Insert Column Chart.', 'Insert Pie Chart.', 'Insert Line Chart.', 'Insert Bar Chart.'],
    correctAnswerIndex: 1,
  },
  {
    id: 36,
    text: 'Hãy chọn phát biểu mô tả ĐÚNG nhất về biểu đồ:',
    options: [
      'Chỉ để trang trí cho đẹp.',
      'Giúp minh họa dữ liệu trực quan, dễ so sánh và nhận định xu hướng.',
      'Thay thế hoàn toàn bảng dữ liệu.',
      'Làm cho bảng tính chạy nhanh hơn.'
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 37,
    text: 'Để hiển thị số liệu cụ thể trên mỗi cột của biểu đồ, ta sử dụng tính năng nào?',
    options: ['Chart Title.', 'Axis Titles.', 'Data Labels.', 'Legend.'],
    correctAnswerIndex: 2,
  },
  {
    id: 38,
    text: 'Để biểu đồ hiển thị số bàn thắng thấp nhất ở dưới và cao nhất ở trên (đối với biểu đồ thanh ngang), ta cần làm gì?',
    options: [
      'Sắp xếp bảng dữ liệu cột Số bàn thắng theo thứ tự tăng dần.',
      'Sắp xếp bảng dữ liệu cột Số bàn thắng theo thứ tự giảm dần.',
      'Sắp xếp cột Tên cầu thủ.',
      'Vẽ lại biểu đồ.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 39,
    text: 'Phát biểu nào sau đây SAI về danh sách dạng liệt kê trong soạn thảo văn bản?',
    options: [
      'Cung cấp hai kiểu: dấu đầu dòng và có thứ tự.',
      'Danh sách không tự động cập nhật khi thêm hoặc bớt đoạn văn.',
      'Có thể sử dụng kết hợp dấu đầu dòng và thứ tự.',
      'Giúp văn bản rõ ràng, dễ theo dõi.'
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 40,
    text: 'Nếu em đặt con trỏ ở cuối dòng thứ hai trong danh sách có thứ tự rồi nhấn Enter, điều gì xảy ra?',
    options: [
      'Một dòng mới xuất hiện với số thứ tự tiếp theo, các dòng dưới tự động tăng số.',
      'Chỉ xuống dòng mà không có số.',
      'Danh sách bị lỗi.',
      'Mất định dạng danh sách.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 41,
    text: 'Phát biểu nào sau đây SAI?',
    options: [
      'Có thể chèn hình ảnh minh họa cho nội dung.',
      'Có thể vẽ hình đồ họa trong phần mềm soạn thảo.',
      'Có thể thay đổi kích thước hình ảnh đã chèn.',
      'Không thể vẽ hình đồ họa trong phần mềm soạn thảo văn bản.'
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 42,
    text: 'Danh sách dạng liệt kê có tác dụng gì?',
    options: [
      'Làm văn bản dài ra.',
      'Chia nhỏ các đoạn văn bản dài, giúp tham khảo thông tin nhanh chóng, dễ dàng.',
      'Bắt buộc phải có trong mọi văn bản.',
      'Tự động sửa lỗi chính tả.'
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 43,
    text: 'Các bước đúng để tạo danh sách có thứ tự là:',
    options: [
      'Chọn đoạn văn -> Home -> Numbering -> Chọn kiểu.',
      'Home -> Numbering -> Chọn đoạn văn.',
      'Insert -> Numbering -> Chọn đoạn văn.',
      'Chọn đoạn văn -> Insert -> Numbering.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 44,
    text: 'Các bước đúng để tạo danh sách dấu đầu dòng là:',
    options: [
      'Chọn đoạn văn -> Home -> Bullets -> Chọn kiểu.',
      'Home -> Bullets -> Chọn đoạn văn.',
      'Insert -> Bullets -> Chọn kiểu.',
      'Chọn đoạn văn -> Insert -> Bullets.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 45,
    text: 'Phát biểu nào SAI về xử lý hình ảnh trong Word?',
    options: [
      'Có thể thay đổi kích thước, vị trí hình ảnh.',
      'Cung cấp thư viện đa dạng các mẫu hình đồ họa Shapes.',
      'Có thể thay đổi lớp hiển thị (nằm trên hoặc dưới văn bản).',
      'Hình ảnh sau khi chèn không thể thay đổi vị trí.'
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 46,
    text: 'Để chèn một hình ảnh vào văn bản em nháy chuột vào thẻ Insert rồi chọn:',
    options: ['Table.', 'Pictures.', 'Shapes.', 'SmartArt.'],
    correctAnswerIndex: 1,
  },
  {
    id: 47,
    text: 'Để chèn một hình đồ hoạ (Shapes) vào văn bản em nháy chuột vào thẻ Insert rồi chọn:',
    options: ['Pictures.', 'Chart.', 'Shapes.', 'Clip Art.'],
    correctAnswerIndex: 2,
  },
  {
    id: 48,
    text: 'Để vẽ một hình chữ nhật trong văn bản, em sử dụng công cụ nào?',
    options: ['Insert -> Pictures.', 'Insert -> Shapes.', 'Home -> Bold.', 'Page Layout -> Margins.'],
    correctAnswerIndex: 1,
  },
  {
    id: 49,
    text: 'Trong thẻ Data, tại nhóm Sort & Filter, chọn lệnh nào để mở hộp thoại sắp xếp nhiều tiêu chí?',
    options: ['Sort.', 'Filter.', 'Clear.', 'Advanced.'],
    correctAnswerIndex: 0,
  },
  {
    id: 50,
    text: 'Đặc điểm của thông tin số là gì?',
    options: [
      'Sao chép nhanh, dễ lan truyền, khó bị xóa bỏ hoàn toàn.',
      'Sao chép chậm, khó lan truyền.',
      'Dễ bị xóa bỏ hoàn toàn, không thể sao chép.',
      'Chỉ tồn tại trong thời gian ngắn.'
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 51,
    text: 'Thông tin trong môi trường số đáng tin cậy ở mức độ nào?',
    options: [
      'Mức độ tin cậy rất khác nhau, từ sai lệch đến đáng tin cậy.',
      'Luôn luôn chính xác 100%.',
      'Hoàn toàn là tin đồn bịa đặt.',
      'Chỉ đáng tin nếu có hình ảnh đi kèm.'
    ],
    correctAnswerIndex: 0,
  },
];
