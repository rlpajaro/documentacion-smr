# Documentación Técnica SMR

## Introducción

Esta documentación describe la instalación de un sistema básico.

---

## Requisitos

- Ordenador
- Sistema operativo
- Conexión a red

---

## Autor

Nombre del alumno



<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  
  // 1. Busca los bloques de texto que GitHub Pages generó a partir de tu Markdown
  const blocks = document.querySelectorAll('.language-mermaid code, code.language-mermaid');
  
  blocks.forEach((block) => {
    // 2. Crea el contenedor especial que necesita Mermaid
    const div = document.createElement('div');
    div.className = 'mermaid';
    div.textContent = block.textContent;
    
    // 3. Reemplaza el bloque de código original con el nuevo contenedor
    const parent = block.closest('.highlighter-rouge') || block.closest('pre') || block;
    parent.replaceWith(div);
  });
  
  // 4. Le dice a Mermaid que dibuje los diagramas
  mermaid.initialize({ startOnLoad: true });
</script>
