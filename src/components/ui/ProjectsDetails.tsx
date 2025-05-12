import StarBackground from "./StarBackground";

interface projects {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface ProjectsDetailsProps {
  post: projects;
  close: () => void;
}

const ProjectsDetails = ({ post, close }: ProjectsDetailsProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/60 p-4"
      onClick={close}
    >
      <StarBackground/>
      <div
        className="bg-[#0A3622] text-white rounded-xl shadow-xl max-w-3xl w-full flex flex-col overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-[#3bbf3f] transition"
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
          <p className="text-sm text-gray-400">{post.category}</p>
          <p className="text-gray-300 text-justify">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
