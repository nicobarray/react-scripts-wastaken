import babel from "rollup-plugin-babel";

export default {
  input: "src/Component.js",
  output: {
    file: "index.js",
    format: "umd",
    name: "Component"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ]
};
