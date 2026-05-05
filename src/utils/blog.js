
/**
 * Extracts plain text from PortableText blocks.
 */
export function extractPlainText(blocks = []) {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children.map(child => child.text).join('');
    })
    .join('\n\n');
}

/**
 * Calculates reading time based on an average speed of 200 words per minute.
 */
export function calculateReadingTime(blocks = []) {
  const text = extractPlainText(blocks);
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

/**
 * Extracts H2 and H3 headings from PortableText blocks for ToC.
 */
export function extractHeadings(blocks = []) {
  return blocks
    .filter(block => block._type === 'block' && ['h2', 'h3'].includes(block.style))
    .map(block => {
      const text = block.children.map(child => child.text).join('');
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return {
        text,
        id,
        level: block.style // 'h2' or 'h3'
      };
    });
}
