// Utility function to scroll to a section by ID
export const scrollToSection = (sectionId) => {
  // Remove the # if present
  const id = sectionId.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Made with Bob