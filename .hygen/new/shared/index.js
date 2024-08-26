const { generateTemplatePaths } = require("../../modules/generateTemplatePaths")
const { CommonQuestions } = require("../../const/CommonQuestions")

const { SEGMENT_QUESTION, COMPONENT_CLASS_QUESTION, MODULE_NAME_QUESTION } = CommonQuestions

module.exports = {
  prompt: (args) => {
    const { inquirer } = args
    const questions = [SEGMENT_QUESTION, COMPONENT_CLASS_QUESTION, MODULE_NAME_QUESTION]

    return inquirer.prompt(questions).then((answers) => {
      const { segment } = answers
      const layer = "shared"

      const paths = generateTemplatePaths({ layer, ...answers })

      return {
        segment,
        ...paths,
      }
    })
  },
}
