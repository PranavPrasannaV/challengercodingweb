import type { ReactNode } from 'react';
import type {
    LessonContentBlock,
    CalloutTone,
} from '@/src/data/lessons/blocks';

/**
 * Renders the small inline-markdown subset ParagraphBlock/ListBlock/
 * CalloutBlock text carries: **bold**, *italic*, `code`, [text](url). Not a
 * general markdown parser — just enough to replace the <strong>/<em>/<code>/
 * <a> that used to arrive as raw HTML.
 */
function renderInline(text: string): ReactNode[] {
    const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
    const parts = text.split(pattern);
    return parts.filter(Boolean).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return (
                <code key={i} className="font-mono text-[0.9em] bg-paper-sunk rounded px-1 py-0.5">
                    {part.slice(1, -1)}
                </code>
            );
        }
        if (part.startsWith('[')) {
            const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
            if (match) {
                return (
                    <a key={i} href={match[2]} className="link-quiet">
                        {match[1]}
                    </a>
                );
            }
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
}

const CALLOUT_TONE_CLASSES: Record<CalloutTone, string> = {
    info: 'bg-brand-tint border-brand',
    tip: 'bg-accent-tint border-accent',
    success: 'bg-success-tint border-success',
    warning: 'bg-paper-sunk border-sand',
    danger: 'bg-danger-tint border-danger',
};

function Block({ block }: { block: LessonContentBlock }) {
    switch (block.type) {
        case 'heading': {
            const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4';
            const sizes = { 2: 'text-h2', 3: 'text-h3', 4: 'text-h4' } as const;
            return (
                <Tag className={`${sizes[block.level]} font-sans font-bold text-ink mt-8 mb-3`}>
                    {block.text}
                </Tag>
            );
        }
        case 'paragraph':
            return <p className="text-body text-ink leading-relaxed mb-4">{renderInline(block.text)}</p>;
        case 'list': {
            const Tag = block.style === 'number' ? 'ol' : 'ul';
            return (
                <Tag className={`${block.style === 'number' ? 'list-decimal' : 'list-disc'} list-outside ml-5 space-y-1.5 text-body text-ink mb-4`}>
                    {block.items.map((item, i) => (
                        <li key={i}>{renderInline(item)}</li>
                    ))}
                </Tag>
            );
        }
        case 'code':
            return (
                <pre className="bg-code-bg text-code-fg font-mono text-small leading-relaxed p-4 rounded-md overflow-x-auto mb-4">
                    <code>{block.code}</code>
                </pre>
            );
        case 'callout':
            return (
                <div className={`border-l-3 border rounded-r-md p-4 mb-4 [&>*:last-child]:mb-0 ${CALLOUT_TONE_CLASSES[block.tone]}`}>
                    {block.title && <p className="font-semibold text-ink mb-1.5">{block.title}</p>}
                    {block.body.map((item, i) => (
                        <Block key={i} block={item} />
                    ))}
                </div>
            );
        case 'image':
            return (
                <figure className="my-6">
                    {/* eslint-disable-next-line @next/next/no-img-element -- lesson assets are arbitrary, unoptimized static images */}
                    <img src={block.src} alt={block.alt} className="max-w-full rounded-md border border-rule" />
                    {block.caption && (
                        <figcaption className="text-small text-ink-meta mt-1.5">{block.caption}</figcaption>
                    )}
                </figure>
            );
        case 'embed':
            return (
                <div
                    className="my-6 border border-rule rounded-md overflow-hidden"
                    style={{ aspectRatio: block.kind === 'scratch' ? '485 / 402' : '16 / 9' }}
                >
                    <iframe src={block.src} className="w-full h-full" allowFullScreen />
                </div>
            );
        case 'table':
            return (
                <div className="overflow-x-auto mb-4">
                    <table className="w-full text-small text-left border-collapse">
                        <thead>
                            <tr className="border-b border-rule-strong">
                                {block.headers.map((h, i) => (
                                    <th key={i} className="px-3 py-2 font-semibold text-ink">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {block.rows.map((row, i) => (
                                <tr key={i} className="border-b border-rule">
                                    {row.map((cell, j) => (
                                        <td key={j} className="px-3 py-2 text-ink-muted">{renderInline(cell)}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
    }
}

export default function Blocks({ blocks }: { blocks: LessonContentBlock[] }) {
    return (
        <div>
            {blocks.map((block, i) => (
                <Block key={i} block={block} />
            ))}
        </div>
    );
}
