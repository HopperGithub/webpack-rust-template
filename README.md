<div align="center">

  <h1><code>webpack-rust-template</code></h1>

  <strong>Kickstart your Rust, WebAssembly and Webpack project!</strong>

</div>

## About

This template is designed for creating Frontend Web applications with
Rust-generated WebAssembly and Webpack without publishing your wasm to NPM.

[**📚 Read this template's tutorial! 📚**][template-docs]

Be sure to check out [other `wasm-pack` tutorials online][tutorials] for other
templates and usages of `wasm-pack`.

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/hybrid-applications-with-webpack/index.html

## 🚴 Using This Template

You can use `npm init` to clone this template:

```sh
npm init webpack-rust my-app
```

[Afterwards check out the full documentation for exploring it][template-docs].

## 🔋 Batteries Included

This template comes pre-configured with all the boilerplate for compiling Rust
to WebAssembly and hooking into a Webpack build pipeline.

* `npm start` -- Serve the project locally for development at
  `http://localhost:8080`. It auto-reloads when you make any changes.

* `npm run build` -- Bundle the project (in production mode).

* `npm test` -- Run the project's unit tests.
