import type { Block } from "@/content/articles";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;
        if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
        if (block.type === "ul") {
          return (
            <ul key={i}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="callout">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
