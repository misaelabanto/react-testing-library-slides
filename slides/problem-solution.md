---
layout: two-cols
---
# Problema
Se require:
- Tests mantenibles para los componentes de React
- Evitar los detalles de implementación en los tests
- No romper tests si hay un cambio de implementación

::right::

# Solución
Testing Library brinda:
- Todo se basa en la renderización de componentes como nodos DOM
- Se exponen sólo métodos y utilitarios para escribir tests que permiten asemejarse a cómo la aplicación está siendo usada
- Las implementaciones de la API son simples y flexibles
- Los elementos de UI son encontrados como un usuarios lo haría