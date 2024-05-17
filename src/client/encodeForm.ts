type FormValue = string | number | boolean | null;
type FormValues = { [key: string]: FormValue | FormValue[] };

/**
 * @todo Not done. Needs to support: checkbox, radio, select
 *
 * Encode HTML Form
 *
 * Encodes a Form element as a plain JavaScript object
 *
 * @param {HTMLFormElement}  form  Form to encode the values of.
 * @returns {Object}  Object containing the `{ name: value }`
 *
 * @example
 * onSubmit = event => {
 *   event.preventDefault();
 *   console.log(encodeForm(event.target));
 * }
 */
export function encodeForm(htmlFormElement: HTMLFormElement): FormValues {
  const ret: FormValues = {};

  const valueOfElement = (element: HTMLElement): FormValue => {
    const type = element.getAttribute("type");
    let asNum: number;
    let value: FormValue;

    switch (element.tagName) {
      case "INPUT":
        switch (type) {
          case "number":
            asNum = Number((element as HTMLInputElement).value);
            return isNaN(asNum) ? NaN : asNum;
          case "checkbox":
            return (element as HTMLInputElement).checked;
          default:
            return (element as HTMLInputElement).value;
        }
      case "TEXTAREA":
        return (element as HTMLTextAreaElement).value;
      case "SELECT": {
        // WONT FIX: Multi not supported.
        const selectElement = element as HTMLSelectElement;
        if (~selectElement.selectedIndex) {
          return selectElement.options[selectElement.selectedIndex].value;
        } else {
          return "";
        }
      }
      default:
        value = element.getAttribute("data-value");
        return typeof value === "string" ? JSON.parse(value) : "";
    }
  };

  htmlFormElement.querySelectorAll(`[name]`).forEach((element) => {
    const name = element.getAttribute("name");
    if (!name) return; // only if name has content

    let arrayMode = false;
    const checkboxLike =
      element instanceof HTMLInputElement &&
      (element.type === "checkbox" || element.type === "radio");

    let value = valueOfElement(element as HTMLElement);
    if (checkboxLike) {
      arrayMode = true;
      value = (element as HTMLInputElement).value;
    }

    if (arrayMode) {
      if (typeof ret[name] === "undefined") ret[name] = [];

      if (!Array.isArray(ret[name])) {
        // skip this erroneous case
        console.warn(
          `[SKIP] Data was set to store an array, but encountered a non-array element: ${element.tagName}[name=${name}]` +
            (element.tagName === "INPUT"
              ? `[type=${(element as HTMLInputElement).type}]`
              : ""),
        );
        return;
      }

      (ret[name] as FormValue[]).push(value);
    } else {
      if (Array.isArray(ret[name])) {
        // skip this erroneous case
        console.warn(
          `Data was set to store a string, but encountered an array element: ${element.tagName}[name=${name}]` +
            (element.tagName === "INPUT"
              ? `[type=${(element as HTMLInputElement).type}]`
              : ""),
        );
        return;
      }

      ret[name] = value;
    }
  });

  return ret;
}
