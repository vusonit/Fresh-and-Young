import { ProjectDetail } from "@/types/project";

export const mockProjectDetails: ProjectDetail[] = [
  {
    id: "1",
    slug: "royal-central-park",
    name: "ROYAL CENTRAL PARK",
    year: "2025",
    description:
      'Royal Central Park – Khu đô thị "All in One" đầu tiên tại Bishkek, kiến tạo biểu tượng sống mới giữa thiên nhiên hùng vĩ và văn hóa Trung Á. Dự án không chỉ thay đổi diện mạo thành phố mà còn thúc đẩy phát triển kinh tế, thu hút đầu tư khu vực. Mỗi căn hộ là sự hòa quyện giữa đẳng cấp và tiện nghi, nơi mọi khoảnh khắc đều đáng giá.',
    services: ["Diễn hoạ 3D", "SA BÀN ẢO", "CGI"],
    thumbnail: "/images/project-1.jpg",
    metadata: {
      developer: "MIK Group",
      location: "Hanoi",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "video", url: "/images/project-1.jpg" },
      { type: "image", url: "/images/project-2.jpg" },
      { type: "image", url: "/images/project-3.jpg" },
      { type: "image", url: "/images/project-1.jpg" },
    ],
  },
  {
    id: "2",
    slug: "sun-feliza-suites",
    name: "SUN FELIZA SUITES",
    year: "2024",
    description:
      "Sun Feliza Suites – Tổ hợp căn hộ cao cấp tại trung tâm thành phố, nơi hội tụ tinh hoa kiến trúc hiện đại và phong cách sống đẳng cấp. Dự án được thiết kế tối ưu không gian sống, mang đến trải nghiệm hoàn hảo cho cư dân.",
    services: ["Diễn hoạ 3D", "Animation"],
    thumbnail: "/images/project-2.jpg",
    metadata: {
      developer: "Sun Group",
      location: "Da Nang",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "image", url: "/images/project-2.jpg" },
      { type: "image", url: "/images/project-3.jpg" },
      { type: "image", url: "/images/project-1.jpg" },
    ],
  },
  {
    id: "3",
    slug: "vinhomes-golden-city",
    name: "VINHOMES GOLDEN CITY",
    year: "2025",
    description:
      "Vinhomes Golden City – Khu đô thị đẳng cấp với hệ thống tiện ích đồng bộ, cảnh quan xanh mát và thiết kế kiến trúc hiện đại. Mỗi căn hộ là một không gian sống lý tưởng, đáp ứng mọi nhu cầu của gia đình hiện đại.",
    services: ["Diễn hoạ 3D", "Virtual Tour", "CGI"],
    thumbnail: "/images/project-3.jpg",
    metadata: {
      developer: "Vinhomes",
      location: "Ho Chi Minh",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "video", url: "/images/project-3.jpg" },
      { type: "image", url: "/images/project-1.jpg" },
      { type: "image", url: "/images/project-2.jpg" },
    ],
  },
  {
    id: "4",
    slug: "citymark-residence",
    name: "CITYMARK RESIDENCE",
    year: "2025",
    description:
      "Citymark Residence – Biểu tượng mới của kiến trúc đô thị, kết hợp hài hòa giữa không gian sống xanh và tiện ích hiện đại. Dự án mang đến phong cách sống thượng lưu ngay giữa lòng thành phố.",
    services: ["Diễn hoạ 3D", "SA BÀN ẢO"],
    thumbnail: "/images/project-1.jpg",
    metadata: {
      developer: "Capital Group",
      location: "Hanoi",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "image", url: "/images/project-1.jpg" },
      { type: "image", url: "/images/project-2.jpg" },
    ],
  },
  {
    id: "5",
    slug: "ocean-park-tower",
    name: "OCEAN PARK TOWER",
    year: "2024",
    description:
      "Ocean Park Tower – Tòa tháp ven biển với tầm nhìn panorama ấn tượng, mang đến trải nghiệm nghỉ dưỡng đẳng cấp ngay tại nhà.",
    services: ["Diễn hoạ 3D", "Animation", "CGI"],
    thumbnail: "/images/project-2.jpg",
    metadata: {
      developer: "Ocean Group",
      location: "Nha Trang",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "video", url: "/images/project-2.jpg" },
      { type: "image", url: "/images/project-3.jpg" },
    ],
  },
  {
    id: "6",
    slug: "sunrise-valley",
    name: "SUNRISE VALLEY",
    year: "2025",
    description:
      "Sunrise Valley – Khu nghỉ dưỡng sinh thái cao cấp giữa thung lũng xanh, nơi thiên nhiên và kiến trúc hòa quyện tạo nên không gian sống đẳng cấp.",
    services: ["Diễn hoạ 3D", "Virtual Tour"],
    thumbnail: "/images/project-3.jpg",
    metadata: {
      developer: "Sunrise Group",
      location: "Da Lat",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "image", url: "/images/project-3.jpg" },
      { type: "image", url: "/images/project-1.jpg" },
      { type: "image", url: "/images/project-2.jpg" },
    ],
  },
  {
    id: "7",
    slug: "parkview-heights",
    name: "PARKVIEW HEIGHTS",
    year: "2024",
    description:
      "Parkview Heights – Căn hộ cao cấp với view công viên thoáng đãng, thiết kế thông minh tối ưu ánh sáng tự nhiên.",
    services: ["Diễn hoạ 3D"],
    thumbnail: "/images/project-1.jpg",
    metadata: {
      developer: "Parkview Corp",
      location: "Hanoi",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "image", url: "/images/project-1.jpg" },
      { type: "image", url: "/images/project-2.jpg" },
    ],
  },
  {
    id: "8",
    slug: "grand-plaza",
    name: "GRAND PLAZA",
    year: "2025",
    description:
      "Grand Plaza – Trung tâm thương mại và căn hộ phức hợp, kiến tạo không gian sống và làm việc đẳng cấp.",
    services: ["Diễn hoạ 3D", "Animation"],
    thumbnail: "/images/project-2.jpg",
    metadata: {
      developer: "Grand Corp",
      location: "Ho Chi Minh",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "image", url: "/images/project-2.jpg" },
      { type: "image", url: "/images/project-3.jpg" },
    ],
  },
  {
    id: "9",
    slug: "the-botanica",
    name: "THE BOTANICA",
    year: "2025",
    description:
      "The Botanica – Khu căn hộ sinh thái lấy cảm hứng từ thiên nhiên, mang đến không gian sống xanh giữa lòng đô thị.",
    services: ["Diễn hoạ 3D", "CGI"],
    thumbnail: "/images/project-3.jpg",
    metadata: {
      developer: "Green Living",
      location: "Hanoi",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "image", url: "/images/project-3.jpg" },
      { type: "image", url: "/images/project-1.jpg" },
    ],
  },
  {
    id: "10",
    slug: "lakeside-manor",
    name: "LAKESIDE MANOR",
    year: "2024",
    description:
      "Lakeside Manor – Biệt thự ven hồ với kiến trúc cổ điển châu Âu, nơi đẳng cấp được định nghĩa bằng sự tinh tế.",
    services: ["Diễn hoạ 3D", "SA BÀN ẢO", "Animation"],
    thumbnail: "/images/project-1.jpg",
    metadata: {
      developer: "Lake Group",
      location: "Hanoi",
      artDirector: "Nguyen Manh Hung",
      renderer: "CG Record team",
    },
    media: [
      { type: "video", url: "/images/project-1.jpg" },
      { type: "image", url: "/images/project-2.jpg" },
      { type: "image", url: "/images/project-3.jpg" },
    ],
  },
];
