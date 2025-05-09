import BlogCard from "./ui/BlogCard";

const BlogSection = () => {

  const blogPosts = [
    {
      id: 1,
      title: "Lançamento do foguete Caatinga na competição nacional",
      excerpt: "Detalhes sobre nosso mais recente lançamento e os resultados obtidos na competição nacional de foguetes.",
      date: "15 Mar 2023",
      image: "/placeholder.svg",
      category: "Competição"
    },
    {
      id: 2,
      title: "Oficina de propulsão para estudantes do ensino médio",
      excerpt: "Evento realizado no campus da UNIVASF com alunos do ensino médio para demonstração de princípios de propulsão.",
      date: "28 Jan 2023",
      image: "/placeholder.svg",
      category: "Extensão"
    },
    {
      id: 3,
      title: "Desenvolvimento do novo sistema de telemetria",
      excerpt: "Detalhes técnicos sobre o novo sistema de telemetria em desenvolvimento pela nossa equipe de eletrônica.",
      date: "12 Dez 2022",
      image: "/placeholder.svg",
      category: "Tecnologia"
    }
  ];

  return (
    <section
      id="blog"
      className="p-24 text-white bg-[linear-gradient(to_bottom,_#0A3622,_#080808)]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-Poppins font-bold text-3xl md:text-4xl mb-4 relative">
            <span className="relative z-10">Blog e Notícias</span>
            <div className="absolute w-20 h-1 bg-secondary bottom-0 left-1/2 transform -translate-x-1/2 mt-5" />
          </h2>
          <p className="text-gray-300 mt-8">
            Acompanhe as últimas novidades, eventos e conquistas do Cactus Rockets Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="
              inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium
              ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2
              disabled:pointer-events-none disabled:opacity-50
              [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
              border border-secondary bg-background text-secondary h-11 rounded-md px-8
              hover:bg-secondary hover:text-black transform hover:scale-105 transition-colors duration-200
            "
          >
            Ver todas as publicações
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
