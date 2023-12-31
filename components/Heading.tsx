interface HeadingProps {
    title?: string;
    description?: string;
  }
  
  export const Heading: React.FC<HeadingProps> = ({
    title,
    description
  }) => {
    return ( 
      <div>
        <h2 className="text-[45px] font-bold tracking-tight">{title}</h2>
        <p className="text-[18px] text-neutral-500">
          {description}
        </p>
      </div>
    );
  };
   