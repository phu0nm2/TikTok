import React from "react";

const useDebounce = (values, delay) => {
  const [debounce, setDebounce] = React.useState(values);

  React.useEffect(() => {
    const hanlderDebounce = setTimeout(() => setDebounce(values), delay);

    return () => clearTimeout(hanlderDebounce);
  }, [values]);
  return debounce;
};

export default useDebounce;
