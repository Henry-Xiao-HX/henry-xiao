import Projects from '../components/Projects/Projects';
import PageLayout from '../components/PageLayout/PageLayout';

const ProjectsPage = () => (
  <PageLayout
    crumb="Projects"
    title="Projects"
    subtitle="A collection of AI systems, data engineering tools, and enterprise solutions I've built. Each project demonstrates practical applications of modern AI and data technologies."
  >
    <Projects />
  </PageLayout>
);

export default ProjectsPage;
