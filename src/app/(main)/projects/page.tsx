import { Button } from "@/components/shared";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "The Grand Residence",
    category: "Residential",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Metro Tower",
    category: "Commercial",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Green Valley",
    category: "Masterplan",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    title: "Luxury Villa",
    category: "Residential",
    image: "/images/project-4.jpg",
  },
  {
    id: 5,
    title: "Office Park",
    category: "Commercial",
    image: "/images/project-5.jpg",
  },
  {
    id: 6,
    title: "Riverside Resort",
    category: "Hospitality",
    image: "/images/project-6.jpg",
  },
];

const categories = ["Tất cả", "Residential", "Commercial", "Masterplan", "Hospitality"];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-32 mt-20">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            Dự án
          </h1>
          <p className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto">
            Khám phá các dự án visualization tiêu biểu của chúng tôi
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-bg-light py-20 lg:py-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm font-medium border border-bg-dark text-text-dark hover:bg-bg-dark hover:text-text-light transition-colors rounded-full"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] bg-bg-dark rounded-lg overflow-hidden mb-4">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-text-gray">
                    [ Project Image ]
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <span className="text-sm text-text-gray-dark uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-text-dark group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline">Xem thêm dự án</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-20 lg:py-24">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-light mb-6">
            Bạn có dự án cần visualization?
          </h2>
          <p className="text-lg text-text-gray mb-10 max-w-2xl mx-auto">
            Hãy chia sẻ với chúng tôi để nhận tư vấn và báo giá chi tiết
          </p>
          <Button variant="primary" href="/contact">
            Gửi yêu cầu báo giá
          </Button>
        </div>
      </section>
    </>
  );
}
