import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const fileType =
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

export const ExcelConvertData = async(Recurringdata) =>{
    const ws = XLSX.utils.json_to_sheet(Recurringdata);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "Excel Export" + fileExtension);
}

