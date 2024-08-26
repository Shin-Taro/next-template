const path = require("path")
const fs = require("fs")
const { LAYER_DIRECTORIES } = require("../../const/directories")

const getSliceDirectories = () =>
  LAYER_DIRECTORIES.flatMap((layer) => {
    const directory = path.join(__dirname, `../../../../../src/layers/${layer}`)
    return fs
      .readdirSync(directory, { withFileTypes: true })
      .flatMap((dirent) => (dirent.isDirectory() ? `${layer}/${dirent.name}` : []))
  })

exports.getSliceDirectories = getSliceDirectories
