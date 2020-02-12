const colors = {
  primary: '#FFFFFF',
  secondary: '#e0e0e0',
  darkPrimary: '#000000',
  divider: 'rgba(58, 108, 201, 0.3)',
  disabled: '#A1A5AD',
  disabledText: 'rgba(67, 76, 92, 0.55)',
  overlay: 'rgba(0, 0, 0, 0.5)',
  transparent: 'rgba(255, 255, 255, 0)',

  accent: '#502d69',
  royalBlue: '#3A6CC9',

  hexToRGBA: (color: string, opacity: number): string => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
  },
};

export default colors;
