import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Design = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        
                       
                    },
                    particles: {
                        color: {
                            value: "#ffff",
                        },
                        move: {
                            direction: "bottom", // Change direction to "bottom"
                            enable: true,
                            outModes: {
                                default: "out", // Change to "out" for falling particles
                            },
                            random: false,
                            speed: 5,
                            straight: false, // Set straight to false for a natural falling motion
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 650,
                            },
                            value: 70,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 6 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default Design;
