# Architecture Diagrams

Place your architecture diagram images in this directory.

## Required Images

Based on your `siteData.js` configuration, you need the following images:

1. **bob-datastage.png** - Bob + DataStage: Automated ISX Export Analysis
2. **bob-context-engineering.png** - Bob + Context Engineering: Metadata-Driven Model Accuracy
3. **bob-optim-tdm.png** - Bob + Optim TDM: Production-Like Test Data
4. **data-fabric-overview.png** - Data Fabric Overview: Overarching Portfolio

## Image Specifications

- **Format**: PNG or JPG (PNG recommended for diagrams)
- **Dimensions**: 1200-1600px wide recommended
- **Aspect Ratio**: 16:9 or 4:3 works well
- **File Size**: Optimize to < 500KB per image for fast loading
- **Quality**: High resolution for clarity when zoomed

## Naming Convention

Use the exact filenames specified in `src/data/siteData.js`:
- `bob-datastage.png`
- `bob-context-engineering.png`
- `bob-optim-tdm.png`
- `data-fabric-overview.png`

## Adding New Diagrams

To add more architecture diagrams:

1. Add the image file to this directory
2. Update `src/data/siteData.js` and add a new entry to the `architectureDiagrams` array:

```javascript
{
  id: 'unique-id',
  title: 'Your Architecture Title',
  description: 'Detailed description of the architecture',
  image: '/images/architecture/your-image.png',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  date: '2024',
}
```

## Tips for Creating Architecture Diagrams

- Use consistent colors and styling across all diagrams
- Include clear labels and legends
- Show data flow with arrows
- Highlight key components
- Keep text readable (minimum 12pt font)
- Use high contrast for better visibility
- Consider dark mode compatibility

## Tools for Creating Diagrams

- **Draw.io / diagrams.net** - Free, web-based
- **Lucidchart** - Professional diagramming
- **Microsoft Visio** - Enterprise standard
- **Miro** - Collaborative whiteboarding
- **Figma** - Design and prototyping
- **PlantUML** - Code-based diagrams

## Placeholder Images

If you don't have images ready yet, you can use placeholder services:
- https://via.placeholder.com/1200x675/0f62fe/ffffff?text=Architecture+Diagram
- https://placehold.co/1200x675/0f62fe/ffffff/png?text=Your+Diagram+Title

Replace the placeholder URLs in `siteData.js` temporarily until your actual diagrams are ready.