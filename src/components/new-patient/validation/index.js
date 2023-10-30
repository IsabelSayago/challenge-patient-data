export const isString = (value) => /^(|[\w\s]+)$/.test(value);             
export const isEmail = (value) => /^(|[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4})$/.test(value);

export const validateField = (textfield) => {
    const item = textfield;
    item.error = '';
  
    switch (item.key) {
      case 'name':
        if (!isString(item.value)) {
          item.error = 'Name is invalid';
        }
        break;
      case 'email':
        if (!isEmail(item.value)) {
          item.error = 'Invalid email format';
        }
        break;
      case 'description':
        if (!isString(item.value)) {
          item.error = 'Invalid description format';
        }
        break;
      default:
        break;
    }
  
    return item;
  };