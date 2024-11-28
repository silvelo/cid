export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0] // Desactiva la regla de longitud de línea en el cuerpo
  }
};
