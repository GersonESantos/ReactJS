// Importações
import React from 'react';
import { createRoot } from 'react-dom/client';

// Estrutura do render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<h1>Meu primeiro render</h1>);
