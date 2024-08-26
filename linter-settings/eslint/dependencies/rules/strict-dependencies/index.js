const strictDependencies = [
  "error",
  [
    // Layers層の依存関係
    {
      module: "src/pages",
      allowReferenceFrom: [],
    },
    {
      module: "src/layers/templates",
      allowReferenceFrom: ["src/pages"],
      allowSameModule: true,
    },
    {
      module: "src/layers/global",
      allowReferenceFrom: ["src/pages", "src/middleware.api.ts"],
      allowSameModule: true,
    },
    {
      module: "src/layers/widgets",
      allowReferenceFrom: ["src/layers/templates", "src/layers/global"],
      allowSameModule: true,
    },
    {
      module: "src/layers/features",
      allowReferenceFrom: [
        "src/pages",
        "src/layers/templates",
        "src/layers/global",
        "src/layers/widgets",
      ],
      allowSameModule: true,
    },
    {
      module: "src/layers/entities",
      allowReferenceFrom: [
        "src/pages",
        "src/layers/templates",
        "src/layers/global",
        "src/layers/widgets",
        "src/layers/features",
      ],
      allowSameModule: true,
    },
    // storeの使用許可
    {
      module: "jotai",
      allowReferenceFrom: [
        "src/pages",
        "src/layers/global",
        "**/components/templates/*/index.tsx",
        "**/components/organisms/*/index.tsx",
        "**/modules/use*/index.ts",
        "**/store/*/index.ts",
      ],
    },
    // 自動生成ファイルの使用許可
    {
      module: "src/common/apiClient/libs/**/*",
      allowReferenceFrom: ["src/common/apiClient/**/*"],
    },
  ],
  { resolveRelativeImport: true },
]

exports.strictDependencies = strictDependencies
