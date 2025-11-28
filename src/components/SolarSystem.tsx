"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

interface Planet {
    name: string;
    color: string;
    size: number;
    period: number;
    radius: number;
    epochLong: number;
}

interface PlanetWithCoords extends Planet {
    x: number;
    y: number;
}

export default function SolarSystem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredPlanet, setHoveredPlanet] = useState<PlanetWithCoords | null>(null);
    const [zoom, setZoom] = useState(1);

    const planets = useMemo<Planet[]>(() => [
        { name: "Mercury", color: "#a9b1d6", size: 4, period: 87.97, radius: 35, epochLong: 252.25 },
        { name: "Venus", color: "#e0af68", size: 6, period: 224.7, radius: 55, epochLong: 181.98 },
        { name: "Earth", color: "#7aa2f7", size: 6, period: 365.25, radius: 80, epochLong: 100.46 },
        { name: "Mars", color: "#f7768e", size: 5, period: 686.98, radius: 105, epochLong: 355.45 },
        { name: "Jupiter", color: "#ff9e64", size: 12, period: 4332.59, radius: 150, epochLong: 34.40 },
        { name: "Saturn", color: "#e0af68", size: 10, period: 10759.22, radius: 190, epochLong: 49.94 },
        { name: "Uranus", color: "#7dcfff", size: 8, period: 30688.5, radius: 225, epochLong: 313.23 },
        { name: "Neptune", color: "#7aa2f7", size: 8, period: 60182, radius: 260, epochLong: 304.88 },
    ], []);

    const currentPlanets = useMemo(() => {
        const now = new Date();

        const start = new Date("2000-01-01");
        const daysSinceEpoch = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

        return planets.map(planet => {
            const meanMotion = 360 / planet.period;
            const currentLong = (planet.epochLong + meanMotion * daysSinceEpoch) % 360;
            const rad = (currentLong - 90) * (Math.PI / 180);
            
            const x = Math.cos(rad) * planet.radius;
            const y = Math.sin(rad) * planet.radius;

            return { ...planet, x, y };
        });
    }, [planets]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheelNative = (e: WheelEvent) => {
            e.preventDefault();
            const scaleAmount = -e.deltaY * 0.01;
            setZoom(prev => Math.min(Math.max(prev + scaleAmount, 0.5), 3));
        };

        container.addEventListener('wheel', handleWheelNative, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheelNative);
        };
    }, []);

    const baseSize = 600;
    const currentSize = baseSize / zoom;
    const offset = -currentSize / 2;
    const viewBox = `${offset} ${offset} ${currentSize} ${currentSize}`;

    return (
        <div 
            ref={containerRef}
            className="w-full h-[400px] bg-tn-bg-dark border border-tn-blue relative overflow-hidden flex items-center justify-center group"
        >
           {/* Retro Scanline Overlay */}
           <div className="absolute inset-0 z-10 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        
           {/* Info HUD */}
           <div className="absolute top-4 left-4 z-20 font-mono text-xs text-tn-comment">
             <div className="flex items-center gap-2">
               <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5" />
               <span>HELIOCENTRIC_VIEW</span>
             </div>
             <div className="mt-1 text-tn-terminal-black">
                {new Date().toISOString().split('T')[0]}
             </div>
           </div>

          {/* SVG Container */}
          <svg viewBox={viewBox} className="w-full h-full max-w-[600px] max-h-[600px] select-none">
            {/* Draw Orbit Rings */}
            {planets.map((planet, i) => (
              <circle
                key={`orbit-${i}`}
                cx="0"
                cy="0"
                r={planet.radius}
                fill="none"
                stroke="#292e42"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-50"
              />
            ))}

            {/* The Sun */}
            <rect x="-15" y="-15" width="30" height="30" fill="#e0af68" className="animate-pulse shadow-[0_0_20px_#e0af68]" />

            {/* Draw Planets */}
            {currentPlanets.map((planet, i) => (
              <g 
                key={`planet-${i}`} 
                transform={`translate(${planet.x}, ${planet.y})`}
                onMouseEnter={() => setHoveredPlanet(planet)}
                onMouseLeave={() => setHoveredPlanet(null)}
                className="cursor-crosshair transition-transform duration-300"
              >
                <rect
                  x={-planet.size / 2} y={-planet.size / 2}
                  width={planet.size} height={planet.size}
                  fill={planet.color} shapeRendering="crispEdges" 
                  className="drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                />
                <text
                  y={-10}
                  className={`font-mono text-[10px] fill-tn-blue opacity-0 transition-opacity ${hoveredPlanet?.name === planet.name ? 'opacity-100' : ''}`}
                  textAnchor="middle"
                >
                  {planet.name.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
        </div>
  );
};