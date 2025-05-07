interface ProjectCardProps{
    title: string;
    category: string;
    description: string;
    index: number;
}

const ProjectCard = ({title, category, description, index }: ProjectCardProps) => {
    return(
      <div className="rounded-lg overflow-hidden border transition-all duration-300 transform border-white/10 bg-[#0b2814] flex flex-col hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(76,175,80,0.3)]">
        
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        </div>
    
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-xs bg-black/60 px-2 py-1 rounded-full text-green-400 font-medium">
              {category}
            </span>
            <span className="float-right text-gray-400 text-xs">#{index + 1}</span>
            <h3 className="text-white text-lg font-semibold mt-2">{title}</h3>
            <p className="text-gray-300 text-sm mt-1">{description}</p>
          </div>
    
          <button className="h-9 rounded-md px-3 mt-6 w-full border border-cosmic-black text-white   hover:bg-secondary hover:text-black transition">
            Ver detalhes
          </button>
        </div>
      </div>
    )
}

export default ProjectCard