export const templateInterpolation = (text: string, values: Record<string, unknown>) => {
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        const pattern = new RegExp(`{${key}}`, 'g');
        text = text.replace(pattern, String(values[key]));
      }
    }
  
    return text;
  }