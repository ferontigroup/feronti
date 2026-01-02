const GeometricShapes = () => {
  return (
    <>
      {/* Top left dodecahedron */}
      <svg
        className="absolute top-16 left-[15%] w-40 h-40 md:w-56 md:h-56 animate-float opacity-40"
        viewBox="0 0 200 200"
        style={{ animationDelay: '0s' }}
      >
        <g className="geometric-shape">
          {/* Pentagon faces - wireframe dodecahedron approximation */}
          <polygon points="100,20 140,50 130,95 70,95 60,50" />
          <polygon points="100,20 60,50 30,35 50,10 100,5" />
          <polygon points="100,20 140,50 170,35 150,10 100,5" />
          <polygon points="60,50 70,95 40,120 20,80 30,35" />
          <polygon points="140,50 130,95 160,120 180,80 170,35" />
          <polygon points="70,95 100,130 130,95 160,120 100,160 40,120" />
        </g>
      </svg>

      {/* Top right dodecahedron */}
      <svg
        className="absolute top-8 right-[5%] w-48 h-48 md:w-72 md:h-72 animate-float opacity-30"
        viewBox="0 0 200 200"
        style={{ animationDelay: '2s' }}
      >
        <g className="geometric-shape">
          <polygon points="100,15 145,45 135,100 65,100 55,45" />
          <polygon points="100,15 55,45 25,30 45,8 100,3" />
          <polygon points="100,15 145,45 175,30 155,8 100,3" />
          <polygon points="55,45 65,100 35,130 15,85 25,30" />
          <polygon points="145,45 135,100 165,130 185,85 175,30" />
          <polygon points="65,100 100,140 135,100 165,130 100,170 35,130" />
        </g>
      </svg>

      {/* Bottom right connected nodes */}
      <svg
        className="absolute bottom-20 right-[10%] w-40 h-40 md:w-56 md:h-56 animate-float opacity-25"
        viewBox="0 0 200 200"
        style={{ animationDelay: '4s' }}
      >
        <g className="geometric-shape">
          {/* Network of connected points */}
          <circle cx="100" cy="100" r="3" fill="hsl(0 0% 25%)" />
          <circle cx="60" cy="60" r="2" fill="hsl(0 0% 25%)" />
          <circle cx="140" cy="60" r="2" fill="hsl(0 0% 25%)" />
          <circle cx="60" cy="140" r="2" fill="hsl(0 0% 25%)" />
          <circle cx="140" cy="140" r="2" fill="hsl(0 0% 25%)" />
          <circle cx="100" cy="40" r="2" fill="hsl(0 0% 25%)" />
          <circle cx="100" cy="160" r="2" fill="hsl(0 0% 25%)" />
          <line x1="100" y1="100" x2="60" y2="60" />
          <line x1="100" y1="100" x2="140" y2="60" />
          <line x1="100" y1="100" x2="60" y2="140" />
          <line x1="100" y1="100" x2="140" y2="140" />
          <line x1="100" y1="100" x2="100" y2="40" />
          <line x1="100" y1="100" x2="100" y2="160" />
          <line x1="60" y1="60" x2="140" y2="60" />
          <line x1="60" y1="140" x2="140" y2="140" />
          <line x1="60" y1="60" x2="60" y2="140" />
          <line x1="140" y1="60" x2="140" y2="140" />
        </g>
      </svg>

      {/* Bottom left small shape */}
      <svg
        className="absolute bottom-32 left-[8%] w-32 h-32 animate-float opacity-20"
        viewBox="0 0 100 100"
        style={{ animationDelay: '3s' }}
      >
        <g className="geometric-shape">
          <polygon points="50,10 85,35 75,75 25,75 15,35" />
          <line x1="50" y1="10" x2="50" y2="50" />
          <line x1="85" y1="35" x2="50" y2="50" />
          <line x1="75" y1="75" x2="50" y2="50" />
          <line x1="25" y1="75" x2="50" y2="50" />
          <line x1="15" y1="35" x2="50" y2="50" />
        </g>
      </svg>
    </>
  );
};

export default GeometricShapes;