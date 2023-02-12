import { localizationManager } from "base/dependencies/managers";
import Swal from "sweetalert2";

export class DialogManager {

  showErrorMessage(title:string, text:string) {
    Swal.fire({
      icon: "error",
      title: title,
      text: text,
      confirmButtonText: localizationManager.translate("OK"),
      customClass:{confirmButton:"button button-contained"}
    });
  }
  showSuccessMessage(title:string, text:string) {
    Swal.fire({
      icon: "success",
      title: title,
      text: text,
      confirmButtonText: localizationManager.translate("OK"),  
      customClass:{confirmButton:"button button-contained"}
    });
  }
}