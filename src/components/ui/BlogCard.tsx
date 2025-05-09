import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps{
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
}

const BlogCard = ({title, excerpt, date, category}: BlogCardProps) => {

    return(
        <div className="rounded-lg text-card-foreground shadow-sm bg-[#0b2814] bg-muted/30 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all  h-full flex flex-col transform hover:-translate-y-1 duration-300  hover:shadow-[0_0_15px_rgba(76,175,80,0.3)]">
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
        </div>
    
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full font-medium">
                {category}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={15} className=" mr-1.5"/>
                <span className="float-right text-gray-400 text-xs flex">
                {date}
                </span>
              </div>

            </div>
            <h4 className="font-Poppins font-semibold text-xl text-white mb-2">{title}</h4>
            <p className="text-gray-300 text-sm mb-4 flex-grow">{excerpt}</p>
          </div>
    
          <button className="flex items-center justify-start h-10 gap-2 px-3 text-sm font-medium text-secondary rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-800 focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-green-700 hover:bg-transparent">
            Leia mais
            <ArrowRight size={16}/>
          </button>
        </div>
      </div>
    )

}

export default BlogCard