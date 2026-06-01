// Utility function to scroll to a section by ID
export const scrollToSection = (sectionId) => {
  // Remove the # if present
  const id = sectionId.replace('#', '');
  
  // Wait for the DOM to be ready
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};

// Made with Bob