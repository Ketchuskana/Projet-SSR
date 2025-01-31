import { useEffect, useState } from 'react';

const ScrollButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-blue-700 text-white px-4 py-2 rounded transition-opacity duration-500 ease-in ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Mon Bouton
    </button>
  );
};

export default ScrollButton;