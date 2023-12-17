import { utils, write } from 'xlsx';
import FileSaver from 'file-saver';

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const fileExtension = '.xlsx';

export async function downloadExcelFile(filename: string, input: any[]) {
  const ws = utils.json_to_sheet(input);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'data');
  utils.book_append_sheet(wb, ws, 'data 2');
  const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, filename + fileExtension);
}