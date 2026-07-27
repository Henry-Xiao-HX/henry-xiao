import { architectureDiagrams } from '../../data/siteData';
import ArchitectureCard from './ArchitectureCard';
import PreviewSection from '../PreviewSection/PreviewSection';
import './Architecture.scss';

const Architecture = ({ preview = false, limit = 3 }) => (
  <PreviewSection
    id="architecture"
    className="architecture-section"
    title="Featured Architectures"
    fullTitle="Architecture Diagrams"
    to="/architecture"
    itemNoun="architecture"
    items={architectureDiagrams}
    preview={preview}
    limit={limit}
    gridClassName="architecture-grid"
    renderItem={(diagram) => <ArchitectureCard key={diagram.id} diagram={diagram} />}
  />
);

export default Architecture;
