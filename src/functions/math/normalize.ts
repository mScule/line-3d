const normalize = (value: number, max: number, min: number) =>
  (value - min) / (max - min);

export default normalize;
