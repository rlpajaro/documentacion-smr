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
  
  // Busca los bloques de código que GitHub Pages generó
  const blocks = document.querySelectorAll('.language-mermaid code, code.language-mermaid');
  
  blocks.forEach((block) => {
    const div = document.createElement('div');
    div.className = 'mermaid';
    div.textContent = block.textContent;
    
    // Reemplaza el bloque de texto por el contenedor visual
    const parent = block.closest('.highlighter-rouge') || block.closest('pre') || block;
    parent.replaceWith(div);
  });
  
  mermaid.initialize({ startOnLoad: true });
</script>
