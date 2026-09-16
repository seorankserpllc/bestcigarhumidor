import React from 'react';

const renderInline = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*.*?\*\*|\[[^\]]+\]\((?:\/|https:\/\/)[^)]+\))/g);
  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-semibold text-stone-100">{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\((\/[^)]*|https:\/\/[^)]*)\)$/);
    if (link) {
      return <a key={index} href={link[2]} className="text-amber-300 underline underline-offset-4 hover:text-amber-200" {...(link[2].startsWith('https://') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{link[1]}</a>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export const GuideMarkdown: React.FC<{ children: string }> = ({ children }) => {
  const blocks = children.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-4 text-stone-300 leading-7 text-sm sm:text-base">
      {blocks.map((block, blockIndex) => {
        const lines = block.split('\n').map(line => line.trim()).filter(Boolean);
        if (!lines.length) return null;

        if (lines[0].startsWith('### ')) {
          return (
            <div key={blockIndex} className="space-y-2">
              <h3 className="font-serif text-lg font-bold text-amber-200">{renderInline(lines[0].slice(4))}</h3>
              {lines.slice(1).map((line, index) => <p key={index}>{renderInline(line)}</p>)}
            </div>
          );
        }

        const isOrdered = lines.every(line => /^\d+\.\s/.test(line));
        const isUnordered = lines.every(line => /^-\s/.test(line));

        if (isOrdered || isUnordered) {
          const ListTag = isOrdered ? 'ol' : 'ul';
          return (
            <ListTag key={blockIndex} className={(isOrdered ? 'list-decimal' : 'list-disc') + ' space-y-2 pl-6 marker:text-amber-500'}>
              {lines.map((line, index) => (
                <li key={index}>{renderInline(line.replace(isOrdered ? /^\d+\.\s/ : /^-\s/, ''))}</li>
              ))}
            </ListTag>
          );
        }

        return <p key={blockIndex}>{lines.map((line, index) => <React.Fragment key={index}>{index > 0 && ' '}{renderInline(line)}</React.Fragment>)}</p>;
      })}
    </div>
  );
};
