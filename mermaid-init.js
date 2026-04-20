import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

const blocks = document.querySelectorAll('.language-mermaid code, code.language-mermaid');

blocks.forEach((block) => {
  const div = document.createElement('div');
  div.className = 'mermaid';
  div.textContent = block.textContent;
  
  const parent = block.closest('.highlighter-rouge') || block.closest('pre') || block;
  parent.replaceWith(div);
});

mermaid.initialize({ startOnLoad: true });
