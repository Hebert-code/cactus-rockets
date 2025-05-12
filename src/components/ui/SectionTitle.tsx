interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right"
}

const SectionTitle = ({ title, subtitle, align = "center" }: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl mx-auto text-${align} mb-16`}>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-2 relative">
        <span className="relative z-10">{title}</span>
        <div className="absolute w-20 h-1 bg-secondary bottom-0 left-1/2 transform -translate-x-1/2 mt-2" />
      </h2>
      {subtitle && <p className="text-gray-300 mt-6">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle