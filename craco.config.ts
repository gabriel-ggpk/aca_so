// Configurando pathing para raiz do projeto
import path from 'path';
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};  