const { normalizeModuleName } = require("./modules/normalizeModuleName")
const { Segments } = require("../../const/Segments")
const { ComponentClass } = require("../../const/ComponentClass")

const { COMPONENTS, MODULES } = Segments
const { MOLECULES, ORGANISMS } = ComponentClass

/**
 *
 * @param {{
 * layer: string
 * slice: string,
 * segment: string,
 * componentClass: string,
 * name: string,
 * }} args
 * @returns
 */
const generateTemplatePaths = (args) => {
  const { layer, slice, segment, componentClass, name } = args

  const isComponent = segment === COMPONENTS
  const isShared = layer === "shared"
  const moduleName = normalizeModuleName(name, segment, isComponent)
  const needTest = [COMPONENTS, MODULES].includes(segment)
  const needViewComponent = isComponent && [MOLECULES, ORGANISMS].includes(componentClass)

  const sliceDir = isShared ? "" : `${slice}/`
  const componentDir = isComponent ? `${componentClass}/` : ""
  const testFileName = needViewComponent ? "View" : "index"
  const extension = isComponent ? "tsx" : "ts"

  const mainPath = `src/layers/${layer}/${sliceDir}${segment}/${componentDir}${moduleName}/index.${extension}`
  const testPath = needTest
    ? `src/layers/${layer}/${sliceDir}${segment}/${componentDir}${moduleName}/${testFileName}.test.${extension}`
    : ""
  const storiesPath = isComponent
    ? `src/layers/${layer}/${sliceDir}${segment}/${componentDir}${moduleName}/${testFileName}.stories.${extension}`
    : ""
  const viewComponentPath = needViewComponent
    ? `src/layers/${layer}/${sliceDir}${segment}/${componentDir}${moduleName}/View.${extension}`
    : ""

  return {
    moduleName,
    mainPath,
    testPath,
    storiesPath,
    viewComponentPath,
  }
}

exports.generateTemplatePaths = generateTemplatePaths
