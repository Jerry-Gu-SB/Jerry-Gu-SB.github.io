import React, { useEffect, useRef, useCallback } from 'react';

const Education: React.FC = () => {
  // Hard-coded education data
  const education = {
    UVA: [
      { 
        institution: "University of Virginia", 
        degree: "Bachelor of Science in Computer Science", 
        duration: "2021-2025" 
      },
      { 
        institution: "University of Virginia", 
        degree: "Masters in Computer Science Accelerated Program", 
        duration: "2024-2026" 
      },
    ],
    SNU: [
      { 
        institution: "Seoul National University", 
        degree: "Study Abroad Program", 
        duration: "Spring 2021" 
      }
    ]
  };

  // Hard-coded coursework data with line break for Cyber-Physical Systems
  const coursework = [
    "Computer Networks",
    "Machine Learning",
    "Cybersecurity",
    "Computer Systems\nand Organization",
    "Algorithms",
    "Discrete Mathematics",
    "Cyber-Physical Systems\nTechnology and Ethics",
    "Linear Algebra",
    "Probability",
    "Ordinary Differential Equations",
    "Multivariable Calculus",
  ];

  // Bouncing text configuration
  const balls = coursework.map((course, index) => {
    let color;
    const csCourses = [
      "Computer Networks",
      "Machine Learning",
      "Cybersecurity",
      "Computer Systems\nand Organization",
      "Algorithms",
    ];

    const mathCourses = [
      "Discrete Mathematics",
      "Linear Algebra",
      "Probability",
      "Ordinary Differential Equations",
      "Multivariable Calculus",
    ];

    // Check if the course is a CS course or Math course
    if (csCourses.includes(course)) {
      color = "rgba(173, 100, 240, 1)"; // Brighter Light Blue
    } else if (mathCourses.includes(course)) {
      color = "rgba(255, 100, 100, 1)"; // Brighter Light Pastel Red
    } else {
      color = `hsl(${(index / coursework.length) * 360}, 100%, 50%)`; // Default color
    }

    return {
      text: course,
    x: Math.random() * (window.innerWidth * 0.75 - 100) + 50, // Random initial x position within bounds
    y: Math.random() * (400 - 50) + 50, // Random initial y position within bounds
    dx: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? 1 : -1), // Slower speed (0.2 to 0.7)
    dy: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? 1 : -1), // Slower speed (0.2 to 0.7)
    color, // Set color
    };
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawText = (ctx: CanvasRenderingContext2D, ball: any) => {
    ctx.fillStyle = ball.color; // Set text color (should be opaque)
  
    // Set a smaller dynamic font size
    let fontSize = Math.min(ball.text.length < 15 ? 20 : 15, 50); // Font size based on length
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  
    // Split text for line breaks
    const lines = ball.text.split("\n");
    const lineHeight = fontSize * 1.2; // Adjust line height
  
    // Draw the text with line breaks
    lines.forEach((line: string, index: number) => {
      ctx.fillText(line, ball.x, ball.y + (index * lineHeight)); // Offset each line
    });
  };

  const updateBallPosition = (ball: any, width: number, height: number) => {
    // Move the ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce off walls
    if (ball.x > width || ball.x < 0) {
      ball.dx *= -1; // Reverse direction
    }
    if (ball.y > height || ball.y < 0) {
      ball.dy *= -1; // Reverse direction
    }
  };

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height); // Clear the canvas

    ctx.fillStyle = 'rgba(211, 211, 211, 0.5)'; // Slightly transparent gray background
    ctx.fillRect(0, 0, width, height);

    balls.forEach(ball => {
      updateBallPosition(ball, width, height);
      drawText(ctx, ball);
    });

    requestAnimationFrame(animate); // Continue the animation
  }, [balls]);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <section id='Education' className="p-10">
      <h2 className="text-4xl mb-8 text-center font-bold">
        Education
      </h2>
      
      {/* Education Section */}
      <div className="mb-16">
        <div className={`mb-10`}>
          <h4 className={`text-3xl mb-5 text-gray-800 font-semibold flex items-center justify-center`}>
            <img src={require(".//images/uva.png")} alt="UVA Logo" className="h-16 mb-2 mr-2" />
            University of Virginia
          </h4>
          <ul className="space-y-2">
            {education.UVA.map((item, index) => (
              <li key={index} className="text-xl text-gray-700">
                <strong>{item.degree}</strong> – {item.institution} ({item.duration})
              </li>
            ))}
            <li className="text-xl text-gray-700">
              <strong>Minor:</strong> Philosophy
            </li>
          </ul>
        </div>

        {/* SNU Study Abroad as a subsection */}
        <div className="mb-10 pl-4">
          <h4 className="text-3xl mb-5 text-gray-800 font-semibold flex items-center justify-center">
            <img src={require(".//images/snu.png")} alt="SNU Logo" className="h-16 mb-2 mr-2" />
            Study Abroad
          </h4>
          <ul className="space-y-2">
            {education.SNU.map((item, index) => (
              <li key={index} className="text-xl text-gray-700">
                <strong>{item.degree}</strong> – {item.institution} ({item.duration})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Coursework Bouncing Text Simulation */}
      <div className="mb-10">
        <h3 className="text-4xl mb-8 text-center font-bold">Coursework</h3>
        <canvas ref={canvasRef} width={window.innerWidth * 0.75} height={400} className="border border-gray-300 mx-auto"></canvas>
      </div>
    </section>
  );
};

export default Education;
