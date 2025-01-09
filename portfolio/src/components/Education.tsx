import React, { useEffect, useRef, useCallback, useState } from 'react';

const Education: React.FC = () => {
  const coursework = [
    "Computer Networks",
    "Machine Learning",
    "Cybersecurity",
    "Operating Systems",
    "Algorithms",
    "Discrete Mathematics",

    "Cyber-Physical Systems\nTechnology and Ethics",
    
    "Linear Algebra",
    "Probability",
    "Ordinary Differential Equations",
    "Multivariable Calculus",
  ];

  // Initialize balls with clickable functionality
  const initialBalls = coursework.map((course, index) => {
    let color;
    const csCourses = [
      "Computer Networks",
      "Machine Learning",
      "Cybersecurity",
      "Operating Systems",
      "Algorithms",
      "Discrete Mathematics",
    ];

    const mathCourses = [
      "Linear Algebra",
      "Probability",
      "Ordinary Differential Equations",
      "Multivariable Calculus",
    ];

    const gradCourses = [
      "Cyber-Physical Systems\nTechnology and Ethics",
    ];

    if (csCourses.includes(course)) {
      color = "rgba(173, 100, 240, 1)";
    } else if (mathCourses.includes(course)) {
      color = "rgba(255, 100, 100, 1)";
    } else if (gradCourses.includes(course)) {
      color = "rgba(80, 50, 240, 1)";
    } else {
      color = `hsl(${(index / coursework.length) * 360}, 100%, 50%)`;
    }

    // Ensure positions are more spread out
    return {
      text: course,
      x: (index % 5) * (window.innerWidth * 0.4 / 5) + 50,
      y: Math.random() * (400 - 50) + 50,
      dx: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? 1 : -1),
      dy: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? 1 : -1),
      color,
      isStopped: false,
    };
  });

  const [balls, setBalls] = useState(initialBalls);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawText = (ctx: CanvasRenderingContext2D, ball: any) => {
    ctx.fillStyle = ball.color;

    let fontSize = Math.min(ball.text.length < 15 ? 30 : 20, 75);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lines = ball.text.split("\n");
    const lineHeight = fontSize * 1.2;

    lines.forEach((line: string, index: number) => {
      ctx.fillText(line, ball.x, ball.y + (index * lineHeight));
    });
  };

  const updateBallPosition = (ball: any, width: number, height: number) => {
    if (!ball.isStopped) { // Only update position if not stopped
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Bounce off the walls
      if (ball.x > width || ball.x < 0) {
        ball.dx *= -1;
      }
      if (ball.y > height || ball.y < 0) {
        ball.dy *= -1;
      }
    }
  };

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(211, 211, 211, 0.5)';
    ctx.fillRect(0, 0, width, height);

    balls.forEach(ball => {
      updateBallPosition(ball, width, height);
      drawText(ctx, ball);
    });

    requestAnimationFrame(animate);
  }, [balls]);

  const handleClick = (event: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    setBalls(prevBalls => {
      return prevBalls.map(ball => {
        // Check if the click is within the bounds of the ball
        const isWithinBall = Math.abs(mouseX - ball.x) < 50 && Math.abs(mouseY - ball.y) < 50;
        if (isWithinBall) {
          return { ...ball, isStopped: true, dx: 0, dy: 0 }; // Stop the ball if clicked and reset velocity
        }
        return ball;
      });
    });
  };

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <section id='Education' className="p-10">
      <h2 className="text-4xl mb-8 text-center font-bold">Education</h2>
      <div className="flex justify-between mb-16">
        {/* Education Section */}
        <div className="flex-1 mr-4">
          <div className="mb-10">
            <h4 className="text-3xl mb-5 text-gray-800 font-semibold flex items-center justify-center">
              <img src={require(".//images/uva.png")} alt="UVA Logo" className="h-16 mb-2 mr-2" />
              University of Virginia
            </h4>
            <ul className="space-y-2">
              <li className="text-xl text-gray-700">
                <strong>Degree:</strong> Bachelor of Science in Computer Science
              </li>
              <li className="text-xl text-gray-700">
                <strong>Minor:</strong> Philosophy
              </li>
            </ul>
          </div>

          <div className="mb-10 pl-4">
            <h4 className="text-3xl mb-5 text-gray-800 font-semibold flex items-center justify-center">
              <img src={require(".//images/snu.png")} alt="SNU Logo" className="h-16 mb-2 mr-2" />
              Seoul National University
            </h4>
            <ul className="space-y-2">
                <li className="text-xl text-gray-700">
                  <strong>Program:</strong> Study Abroad (Spring 2024)
                </li>
            </ul>
          </div>
        </div>

        {/* Coursework Bouncing Text Simulation */}
        <div className="flex-1">
          <canvas 
            ref={canvasRef} 
            width={window.innerWidth * 0.4} 
            height={400} 
            className="border border-gray-300"
            onClick={handleClick}
          ></canvas>
        </div>
      </div>
    </section>
  );
};

export default Education;
