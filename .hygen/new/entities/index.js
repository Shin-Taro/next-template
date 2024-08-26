const { generateTemplatePaths } = require("../../modules/generateTemplatePaths")
const { CommonQuestions } = require("../../const/CommonQuestions")

const { SEGMENT_QUESTION, COMPONENT_CLASS_QUESTION, MODULE_NAME_QUESTION } = CommonQuestions

module.exports = {
  prompt: (args) => {
    const { inquirer } = args
    const questions = [
      {
        type: "input",
        name: "slice",
        message: "対象のentity名を入力してください\n(例: user, company, offer, etc.)\n>>",
        required: true,
      },
      SEGMENT_QUESTION,
      COMPONENT_CLASS_QUESTION,
      MODULE_NAME_QUESTION,
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { segment } = answers
      const layer = "entities"

      const paths = generateTemplatePaths({ layer, ...answers })

      return {
        segment,
        ...paths,
      }
    })
  },
}
