interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

const ProjectFilter = ({ categories, active, onChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
            active === category
              ? "bg-secondary text-black"
              : "bg-muted border-white/10 hover:bg-secondary/10 text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
