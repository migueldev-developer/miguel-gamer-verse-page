
interface GameCardProps {
  name: string;
  imagePath: string;
  description: string;
}

const GameCard = ({ name, imagePath, description }: GameCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg h-80 cursor-pointer">
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity z-10"></div>
      
      <img
        src={imagePath}
        alt={name}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
          <h3 className="text-xl font-russo mb-2 text-white group-hover:text-gamer-purple">{name}</h3>
          <p className="text-white/80 text-sm transform max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-300">{description}</p>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 bg-gamer-dark-blue/80 py-1 px-3 rounded-full text-xs font-bold z-20">
        Favorito
      </div>
    </div>
  );
};

export default GameCard;
