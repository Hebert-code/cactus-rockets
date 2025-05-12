import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./ui/BlogCard";
import SectionTitle from "./ui/SectionTitle";
import BlogDetails from "./ui/BlogDetails"; // certifique-se de que o caminho está correto
import { blogPosts } from "@/data/blog";
import StarBackground from "./ui/StarBackground";


interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const BlogSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedPost, setExpandedPost] = useState<BlogPost | null>(null);

  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  const handleToggle = () => {
    setShowAll(prev => {
      const newState = !prev;
      if (!newState && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return newState;
    });
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative px-4 py-16 sm:px-8 sm:py-20 lg:px-24 lg:py-24 text-white bg-[linear-gradient(to_bottom,_#0A3622,_#080808)]"
    >
      <StarBackground/>
      <div className="w-full max-w-7xl mx-auto">
        <SectionTitle 
          title="Blog e Notícias"
          subtitle="Acompanhe as últimas novidades, eventos e conquistas do Cactus Rockets Design."
        />

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence initial={false}>
            {visiblePosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setExpandedPost(post)}
                className="cursor-pointer"
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <button
            onClick={handleToggle}
            className="
              inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium
              ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2
              disabled:pointer-events-none disabled:opacity-50
              [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
              border border-secondary bg-background text-secondary h-11 rounded-md px-8
              hover:bg-secondary hover:text-black transform hover:scale-105 transition-colors duration-200
            "
          >
            {showAll ? "Ver menos" : "Ver todas as publicações"}
          </button>
        </div>
      </div>

      {/* Detalhes do post */}
      {expandedPost && (
        <BlogDetails
          post={expandedPost}
          close={() => setExpandedPost(null)}
        />
      )}
    </section>
  );
};

export default BlogSection;
