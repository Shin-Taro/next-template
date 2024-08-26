const { Segments } = require("../Segments")
const { ComponentClass } = require("../ComponentClass")

const { COMPONENTS, MODULES, TYPES, CONST, SCHEMA, STORE, STYLES } = Segments
const { ATOMS, MOLECULES, ORGANISMS } = ComponentClass

const SEGMENT_QUESTION = {
  type: "select",
  name: "segment",
  message: "segment を選択してください",
  choices: [COMPONENTS, TYPES, MODULES, CONST, STYLES, SCHEMA, STORE],
  required: true,
}

const COMPONENT_CLASS_QUESTION = {
  type: "select",
  name: "componentClass",
  message: "コンポーネントの分類を選択してください\n(segmentがcomponents以外の場合は無視されます)",
  choices: [ATOMS, MOLECULES, ORGANISMS],
}

const MODULE_NAME_QUESTION = {
  type: "input",
  name: "name",
  message: "モジュールの名前を入力してください\n(例: FooButton, postBar, bazAtom, etc.)\n>>",
  required: true,
}

/**
 * @remarks
 * hygen のプロンプトで共通に使用する質問
 */
const CommonQuestions = {
  SEGMENT_QUESTION,
  COMPONENT_CLASS_QUESTION,
  MODULE_NAME_QUESTION,
}

exports.CommonQuestions = CommonQuestions
