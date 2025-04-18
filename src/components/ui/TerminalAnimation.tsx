import React, { useEffect, useState } from 'react';

const TerminalAnimation: React.FC = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const codeSnippet = `
// AI-driven process automation
async function automateWorkflow() {
  const data = await fetchDataFromSource();
  const processedData = applyMLModel(data);
  const optimizedResults = await optimizeOutputs(processedData);
  return deployAutomatedSolution(optimizedResults);
}

// Execute the automation
automateWorkflow()
  .then(result => console.log("Automation completed:", result))
  .catch(err => console.error("Error:", err));
`;
  
  useEffect(() => {
    let position = 0;
    let timer: NodeJS.Timeout;
    
    const typeWriter = () => {
      if (position < codeSnippet.length) {
        setText(codeSnippet.substring(0, position + 1));
        position++;
        
        // Random typing speed for realistic effect
        const randomDelay = Math.floor(Math.random() * 10) + 20;
        timer = setTimeout(typeWriter, randomDelay);
      }
    };
    
    timer = setTimeout(typeWriter, 1000);
    
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, []);
  
  return (
    <div className="terminal w-full h-full shadow-lg rounded-md overflow-hidden">
      <div className="bg-neutral-dark px-4 py-2 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-xs text-white ml-2 flex-1 text-center">ai-automation.js</span>
      </div>
      <div className="p-4 bg-neutral-dark text-white font-mono text-sm whitespace-pre-wrap overflow-auto" style={{ maxHeight: '300px' }}>
        {text}
        <span className={`inline-block w-2 h-4 bg-white ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
      </div>
    </div>
  );
};

export default TerminalAnimation;