import {toast} from "react-toastify";
import {RefObject} from "react";

export const setValidationErrors = (errorsFromBackend: any, errorFunction: any) => {
  for(const error in errorsFromBackend){
    errorFunction(error, {type: 'manual', message: errorsFromBackend[error][0]})
  }
}

const buildFormData = (formData: FormData, data: any, parentKey: string) => {
  if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
    });
  } else {
    const value = data == null ? '' : data;

    formData.append(parentKey, value);
  }
}

export const convertObjectToFormData = (data: Object) => {
  const formData = new FormData();

  buildFormData(formData, data, '');
  return formData;
}

export const displayErrorMessage = (error: string) => {
  toast.error(error, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const displaySuccessMessage = (message: string) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const scrollToTop = (ref: RefObject<HTMLDivElement>) => {
  ref.current?.scrollIntoView({behavior: "smooth"})
}
