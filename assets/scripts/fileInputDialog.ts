export default function openFileInputDialog(extension?: string): Promise<FileList | null> {
  const fileInputElement = document.createElement("input");
  fileInputElement.type = "file";
  fileInputElement.accept = extension || ".csx,.sbl,.sbb,.png";

  return new Promise((resolve) => {
    fileInputElement.onchange = () => {
      resolve(fileInputElement.files);
    };
    fileInputElement.click();
  });
}
