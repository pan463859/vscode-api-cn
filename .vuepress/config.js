module.exports = {
  title: "vscode api",
  plugins: [
    [
      'vuepress-plugin-typedoc',
      {
        // TypeDoc options
        entryPoints: ['vscode.d.ts'],
        tsconfig: 'tsconfig.json',
        // Plugin options
        sidebar: {
          fullNames: true,
          parentCategory: 'API',
        },
      },
    ],
  ],
}