import StarBackground from "./StarBackground";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface BlogDetailsProps {
  post: BlogPost;
  close: () => void;
}

const BlogDetails = ({ post, close }: BlogDetailsProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black/50 p-4"
      onClick={close}
    >
      <StarBackground/>
      
      <div
        className="bg-[#0A3622] text-black rounded-lg shadow-lg max-w-3xl w-full flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-gray-800 transition"
            onClick={close}
            aria-label="Fechar"
          >
            &times;
          </button>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-60 object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold font-poppins text-[#3bbf3f]">{post.title}</h2>
          <p className="text-sm text-gray-400">{post.date} • {post.category}</p>
          <p className="text-gray-300 text-justify">{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
