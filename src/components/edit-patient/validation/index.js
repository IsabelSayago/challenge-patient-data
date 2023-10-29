export const isString = (value) => /^(|[\w\s]+)$/.test(value);
export const isAWebsite = (value) => /^(https?:\/\/)?(www\.)?[\w.-]+\.\w{2,4}(\/\S*)?$/.test(value);
      
export const validateField = (textfield) => {
    const item = textfield;
    item.error = '';

    console.log('item', item);
  
    switch (item.key) {
      case 'name':
        if (!isString(item.value)) {
          item.error = 'Name is invalid';
        }
        break;
      case 'website':
        if (!isAWebsite(item.value)) {
          item.error = 'Invalid website format';
        }
        break;
      default:
        break;
    }
  
    return item;
  };