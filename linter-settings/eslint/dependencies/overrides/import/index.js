const { getSliceDirectories } = require("../../modules/getSliceDirectories")
const { LAYER_DIRECTORIES } = require("../../const/directories")

const COMMON_MODULES = ["**/node_modules/**", "**/shared/**", "**/common/**"]
const sliceDirectories = getSliceDirectories()

const sliceOverrides = sliceDirectories.map((directory) => {
  const [parentLayer] = directory.split("/")
  const externalLayers = LAYER_DIRECTORIES.filter((layer) => layer !== parentLayer).join("|")
  const allowLayers = parentLayer === "entities" ? LAYER_DIRECTORIES.join("|") : externalLayers
  return {
    files: [`**/${directory}/**/*.{ts,tsx}`],
    rules: {
      "import/no-internal-modules": [
        "error",
        {
          allow: [...COMMON_MODULES, `**/${directory}/**/*.{ts,tsx}`, `**/*(${allowLayers})/*`],
        },
      ],
    },
  }
})

const pagesOverrides = [
  {
    files: ["**/pages/**/*.{ts,tsx}", "src/middleware.api.ts"],
    rules: {
      "import/no-internal-modules": [
        "error",
        {
          allow: [...COMMON_MODULES, ...LAYER_DIRECTORIES.map((layer) => `**/${layer}/*/*.ts`)],
        },
      ],
    },
  },
]

exports.importOverrides = [...sliceOverrides, ...pagesOverrides]
