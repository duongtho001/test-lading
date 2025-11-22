import { Tour, Testimonial, FaqItem, Milestone } from './types';
import { Mountain, Anchor, Trees, Wind } from 'lucide-react';

export const NAV_LINKS = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Dịch vụ Tour', href: '#tours' },
    { name: 'Thư viện', href: '#gallery' },
    { name: 'Liên hệ', href: '#contact' },
];

export const TOURS: Tour[] = [
    {
        id: 1,
        title: "Chinh Phục Đỉnh Fansipan",
        category: "Mountain",
        price: "3.500.000 VNĐ",
        duration: "2 Ngày 1 Đêm",
        difficulty: "Hard",
        image: "https://picsum.photos/800/600?random=1",
        description: "Hành trình leo núi chinh phục nóc nhà Đông Dương với những cung đường hiểm trở nhưng đầy mê hoặc."
    },
    {
        id: 2,
        title: "Lặn Biển San Hô Phú Quốc",
        category: "Water",
        price: "1.800.000 VNĐ",
        duration: "1 Ngày",
        difficulty: "Easy",
        image: "https://picsum.photos/800/600?random=2",
        description: "Khám phá thế giới đại dương đầy màu sắc tại vùng biển đẹp nhất Việt Nam với thiết bị chuyên nghiệp."
    },
    {
        id: 3,
        title: "Trekking Rừng Cúc Phương",
        category: "Jungle",
        price: "2.200.000 VNĐ",
        duration: "2 Ngày 1 Đêm",
        difficulty: "Medium",
        image: "https://picsum.photos/800/600?random=3",
        description: "Đi bộ xuyên rừng già, cắm trại đêm và tìm hiểu hệ sinh thái phong phú của rừng quốc gia."
    },
    {
        id: 4,
        title: "Nhảy Dù Mù Cang Chải",
        category: "Air",
        price: "4.500.000 VNĐ",
        duration: "30 Phút",
        difficulty: "Medium",
        image: "https://picsum.photos/800/600?random=4",
        description: "Bay lượn trên những thửa ruộng bậc thang vàng óng, trải nghiệm cảm giác tự do tuyệt đối."
    },
    {
        id: 5,
        title: "Khám Phá Hang Sơn Đoòng",
        category: "Mountain",
        price: "60.000.000 VNĐ",
        duration: "4 Ngày 3 Đêm",
        difficulty: "Extreme",
        image: "https://picsum.photos/800/600?random=5",
        description: "Thám hiểm hang động lớn nhất thế giới. Một trải nghiệm để đời dành cho những người can đảm nhất."
    },
    {
        id: 6,
        title: "Chèo Kayak Vịnh Hạ Long",
        category: "Water",
        price: "1.200.000 VNĐ",
        duration: "1 Ngày",
        difficulty: "Easy",
        image: "https://picsum.photos/800/600?random=6",
        description: "Chèo thuyền len lỏi qua các hang động đá vôi và ngắm nhìn kỳ quan thiên nhiên thế giới."
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        role: "Adventure Blogger",
        avatar: "https://picsum.photos/100/100?random=10",
        comment: "Chuyến đi tuyệt vời nhất tôi từng tham gia. Đội ngũ hướng dẫn viên cực kỳ chuyên nghiệp và nhiệt tình.",
        rating: 5
    },
    {
        id: 2,
        name: "Trần Thu Hà",
        role: "Nhiếp ảnh gia",
        avatar: "https://picsum.photos/100/100?random=11",
        comment: "Cảnh quan hùng vĩ, dịch vụ chu đáo. Tôi đã có những bức ảnh để đời trong chuyến trekking vừa rồi.",
        rating: 5
    },
    {
        id: 3,
        name: "Michael Smith",
        role: "Du khách quốc tế",
        avatar: "https://picsum.photos/100/100?random=12",
        comment: "Adrenaline Expeditions truly pushed my limits. Safe, fun, and unforgettable.",
        rating: 4
    }
];

export const FAQS: FaqItem[] = [
    {
        question: "Tôi cần chuẩn bị thể lực như thế nào?",
        answer: "Tùy thuộc vào cấp độ tour. Chúng tôi có các bài kiểm tra và tư vấn thể lực cụ thể cho từng hành trình trước khi bạn đăng ký."
    },
    {
        question: "Tour có bao gồm bảo hiểm không?",
        answer: "Có. Tất cả các tour của Adrenaline Expeditions đều bao gồm bảo hiểm du lịch mạo hiểm gói cao cấp nhất."
    },
    {
        question: "Chính sách hủy tour ra sao?",
        answer: "Hoàn tiền 100% nếu hủy trước 7 ngày. Hoàn 50% nếu hủy trước 3 ngày. Vui lòng xem chi tiết trong điều khoản dịch vụ."
    }
];

export const HISTORY: Milestone[] = [
    {
        year: "2018",
        title: "Thành lập",
        description: "Adrenaline Expeditions ra đời với sứ mệnh kết nối con người với thiên nhiên hoang dã."
    },
    {
        year: "2020",
        title: "Mở rộng quy mô",
        description: "Đạt mốc 1.000 khách hàng và mở rộng tour đến 10 tỉnh thành Việt Nam."
    },
    {
        year: "2022",
        title: "Giải thưởng Du lịch",
        description: "Vinh dự nhận giải thưởng 'Công ty du lịch mạo hiểm an toàn nhất năm'."
    },
    {
        year: "2024",
        title: "Vươn tầm quốc tế",
        description: "Bắt đầu đón tiếp các đoàn khách quốc tế và hợp tác với các tổ chức bảo tồn thiên nhiên toàn cầu."
    }
];

export const CATEGORY_ICONS = {
    Mountain: Mountain,
    Water: Anchor,
    Jungle: Trees,
    Air: Wind
};