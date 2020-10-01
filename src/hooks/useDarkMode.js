import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValues, cb) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  const setDarkMode = (v) => {
    setValues(v);
  };
  return [values, setDarkMode];
};

export default useDarkMode;
