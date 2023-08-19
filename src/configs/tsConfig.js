const tsconfig = {
  compilerOptions: {
    target: "ES6",
    lib: ["dom", "dom.iterable", "esnext"],
    allowJs: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    noFallthroughCasesInSwitch: true,
    module: "ESNext",
    moduleResolution: "node",
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: "react",
    outDir: "./dist",
  },
  include: ["src"],
};

module.exports = tsconfig;
