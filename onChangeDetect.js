let getSchemaObjFromFile = require('./utils/getSchemaObjFromFile').getSchemaObjFromFile
let findViewWithSpecificProp = require('./utils/viewAndPropFinder').findViewWithSpecificProp
let findViewWithSpecificProps = require('./utils/viewAndPropFinder').findViewWithSpecificProps
let writeOutput = require('./utils/writeOutput').writeOutput
let getFiles = require('./utils/getFiles').getFiles


let files = []
let viewListForFieldSelect = []
let viewListForFieldSelect1 = []
let viewListForAmount = []
let viewListForEmail = []
let viewListForFrenchPhone = []
let viewListForIban = []
let viewListForInteger = []
let viewListNumber = []
let viewListPercentage = []
let viewListPhone = []
let viewListPicker = []
let viewListTab = []
let viewListText = []
let viewListTextPicker = []
let viewListField = []
let viewListButton = []
let viewListPicker1 = []
let viewListSelectWithDesc = []

function testFilesForFieldSelect(files, fieldGuid, list) {
    for (file of files) {
        let schema = getSchemaObjFromFile(file.path)
        if (schema && schema) {
            if (findViewWithSpecificProp(schema, fieldGuid, "onChange")) {
                list.push(file.directory)
            }
        }
    }
}

function testFilesForField(files, fieldGuid, list) {
    for (file of files) {
        let schema = getSchemaObjFromFile(file.path)
        if (schema && schema) {
            if (findViewWithSpecificProps(schema, fieldGuid, ["onChange", "suggest"])) {
                list.push(file.directory)
            }
        }
    }
}



getFiles('C:/DevEnvironments/WynsureCurrent/wynsure-fullweb/packages', files)
testFilesForFieldSelect(files, "@FieldSelectV2", viewListForFieldSelect)
testFilesForFieldSelect(files, "@FieldSelect", viewListForFieldSelect1)
testFilesForFieldSelect(files, "@FieldPicker_v2", viewListPicker)
testFilesForFieldSelect(files, "@FieldTab", viewListTab)
testFilesForFieldSelect(files, "@FieldPicker", viewListPicker1)
testFilesForFieldSelect(files, "@FieldSelectWithDesc", viewListSelectWithDesc)
testFilesForField(files, "@FieldAmount", viewListForAmount)
testFilesForField(files, "@FieldEmail", viewListForEmail)
testFilesForField(files, "@FieldForFrenchPhone", viewListForFrenchPhone)
testFilesForField(files, "@FieldForIban", viewListForIban)
testFilesForField(files, "@FieldInteger", viewListForInteger)
testFilesForField(files, "@FieldNumber", viewListNumber)
testFilesForField(files, "@FieldPercentage", viewListPercentage)
testFilesForField(files, "@FieldTel", viewListPhone)
testFilesForField(files, "@FieldText", viewListText)
testFilesForField(files, "@FieldTextPicker", viewListTextPicker)
testFilesForField(files, "@Input", viewListField)
testFilesForField(files, "@FieldButton", viewListButton)
writeOutput('onChangeFieldSelect.txt', viewListForFieldSelect)
writeOutput('onChangeFieldSelect1.txt', viewListForFieldSelect1)
writeOutput('onChangeFieldPicker.txt', viewListPicker)
writeOutput('onChangeTab.txt', viewListTab)
writeOutput('onChangeFieldPicker1.txt', viewListPicker1)
writeOutput('onChangeAmount.txt', viewListForAmount)
writeOutput('onChangeEmail.txt', viewListForEmail)
writeOutput('onChangeFrenchPhone.txt', viewListForFrenchPhone)
writeOutput('onChangeIban.txt', viewListForIban)
writeOutput('onChangeInteger.txt', viewListForInteger)
writeOutput('onChangeNumber.txt', viewListNumber)
writeOutput('onChangePercentage.txt', viewListPercentage)
writeOutput('onChangePhone.txt', viewListPhone)
writeOutput('onChangeText.txt', viewListText)
writeOutput('onChangeTextPicker.txt', viewListTextPicker)
writeOutput('onChangeField.txt', viewListField)
writeOutput('onChangeButton.txt', viewListButton)
writeOutput('onChangeSelectWithDesc.txt', viewListSelectWithDesc)