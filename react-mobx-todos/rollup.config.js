import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import typescript from "rollup-plugin-typescript"

export default {
  dest: "dist/rollup.js",
  entry: "./src/Main.tsx",
  format: "iife",
  plugins: [
    typescript({
      jsx: "react",
      typescript: require("typescript"),
    }),
    nodeResolve({
      browser: true,
      jsnext: true,
      main: true,
      module: true
    }),
    commonjs({
      include: [
        "node_modules/**"
      ],
      namedExports: {
        "mobx-react": ["observer"],
        "react": ["Component", "createElement"],
        "react-dom": ["render"]
      }
    })
  ]
}