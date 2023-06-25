This is a demo app of [FBT](https://facebook.github.io/fbt/) used in [Next.js](https://nextjs.org/) with Typescript. See it in action: [nextjs-fbt.vercel.app](https://nextjs-fbt.vercel.app/)

## Getting Started

FBT itself works great, but its installation requires a few tricks.

### Peer dependency error

When you run `npm install fbt` to install the package, it fails with this error:

```
npm ERR! Could not resolve dependency:
npm ERR! peer react@"0.12.0 - 17.x.x" from fbt@1.0.0
npm ERR! node_modules/fbt
npm ERR!   fbt@"*" from the root project
```

It is a [known issue](https://github.com/facebook/fbt/issues/395), before it is fixed in the new version, it needs to be fixed manually in `package.json`:

```
"overrides": {
  "fbt@1.0.0": {
    "react": "18.2.0"
  }
}
```

### Babel setup

In addition to two mandatory plugins (`babel-plugin-fbt` and `babel-plugin-fbt-runtime`), you need to setup Babel so that this error does not occur:

```
Error: Line 27 Column 11: fbt is not bound. Did you forget to require('fbt')?
```

Why this error happens and one way how to fix it is [explained here](https://github.com/retyui/fbt/blob/add-ts-docs/docs/using_typescript.md#known-issues).

A simpler fix due to `@adeira/babel-preset-adeira` is used in this project:
https://github.com/michalsanger/nextjs-fbt/blob/746a6a679a8a5dd33e9fce7e2c01fe77a420290e/.babelrc.js#L1-L7

### NPM scripts

Collecting and translating with FBT is a three step process for which three NPM scripts are prepared:
https://github.com/michalsanger/nextjs-fbt/blob/746a6a679a8a5dd33e9fce7e2c01fe77a420290e/package.json#L13-L16

I recommend to run them all at once with `npm run fbt`.

### Prettier on generated files

If you use `npm run fbt` then `postfbt` script will be executed automatically to format generated files with Prettier. I find it useful for `git diff`, code review etc to have those files nicely formatted.
