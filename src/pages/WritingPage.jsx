import Writing from '../components/Writing/Writing';
import PageLayout from '../components/PageLayout/PageLayout';

const WritingPage = () => (
  <PageLayout
    crumb="Writing"
    title="Writing"
    subtitle="Technical articles and insights on AI systems, data engineering, and enterprise software development. Sharing lessons learned from building production AI solutions."
  >
    <Writing />
  </PageLayout>
);

export default WritingPage;
