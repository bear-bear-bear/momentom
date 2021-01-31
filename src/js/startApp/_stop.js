const stop = (s = 1) => new Promise((resolve) => setTimeout(resolve, s * 1000));

export default stop;
