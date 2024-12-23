import React, { useEffect, useRef } from 'react';
import '../css/Services.css';

const MovingIcons = () => {
  const iconRef = useRef();

  useEffect(() => {
    const moveIcons = () => {
      const container = iconRef.current;
      const firstChild = container.children[0];
      const lastChild = container.children[container.children.length - 1];

      if (firstChild) {
        container.removeChild(firstChild);
        container.appendChild(firstChild);
      }
    };

    const intervalId = setInterval(moveIcons, 1000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="moving-icons" ref={iconRef}>
      <div className="icon">
        <i className="fas fa-code"></i>
        <p>Web Development</p>
      </div>
      <div className="icon">
        <i className="fas fa-mobile-alt"></i>
        <p>Mobile Development</p>
      </div>
      <div className="icon">
        <i className="fas fa-cloud"></i>
        <p>Cloud Computing</p>
      </div>
      <div className="icon">
        <i className="fas fa-database"></i>
        <p>Database Management</p>
      </div>
    </div>
  );
};

export default MovingIcons;
