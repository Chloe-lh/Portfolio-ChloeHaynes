// src/TriadicSketch.js
import { useEffect, useRef } from 'react';
import p5 from 'p5';

const TriadicSketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let circles = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSB, 360, 100, 100, 300);
        p.noStroke();

        for (let i = 0; i < 40; i++) {
          circles.push({ x: p.random(-200, p.width), y: p.random(-200, p.height), d: p.random(10, 500), h: 41, s: 100, b: 100 });
          circles.push({ x: p.random(-200, p.width), y: p.random(-200, p.height), d: p.random(200, 500), h: 290, s: 100, b: 100 });
          circles.push({ x: p.random(-200, p.width), y: p.random(-200, p.height), d: p.random(200, 500), h: 168, s: 100, b: 100 });
        }
      };

      p.draw = () => {
        p.background(0, 0, 100, 50); // white-ish trail fade, adjust alpha for persistence
        for (let c of circles) {
          // Smoothly move toward a new random target
          if (!c.tx || p.frameCount % 60 === 0) { // every ~1 second
            c.tx = c.x + p.random(-100, 100);
            c.ty = c.y + p.random(-100, 100);
            c.td = c.d + p.random(-20, 20);
          }

          // Smoothly interpolate position and diameter
          c.x = p.lerp(c.x, c.tx, 0.05);
          c.y = p.lerp(c.y, c.ty, 0.05);
          c.d = p.lerp(c.d, c.td, 0.05);

          gradCircle(c.x, c.y, c.d, c.h, c.s, c.b);

        }
      };

      function gradCircle(x, y, d, h, s, v) {
        let alpha = 0;
        for (let i = 0; i < 40; i++) {
          p.fill(h, s, v, alpha);
          p.circle(x, y, d);
          d -= 5;
          alpha += 0.5;
        }
      }

      p.keyPressed = () => {
        if(p.key === ' '){
          for (let c of circles) {
            c.h = (c.h + 50) % 360;
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const canvas = new p5(sketch, sketchRef.current);
    return () => canvas.remove(); // cleanup
  }, []);

  return (
    <div ref={sketchRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // Ensure it stays in the background
        pointerEvents: 'none'
      }}
      />
  );
};

export default TriadicSketch;
