node .\index.js && (
  cscript message.vbs "Success."
) || (
  cscript message.vbs "Fail. Please make sure all files in docx folder are .docx type"
)