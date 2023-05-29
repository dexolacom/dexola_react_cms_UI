import { useState } from "react";

export const useTypeStatus = (num: number) => {
  const fillArray = (arrLength: number) => Array(arrLength).fill(false);

  const [typeStatus, setTypeStatus] = useState<boolean[]>(fillArray(num));

  const clickHandler = (e: React.SyntheticEvent) => {
    const id = +e?.currentTarget?.id;
    if (typeStatus.length > 0) {
      const newStatusArray = typeStatus.map((el, idx) =>
        idx === id && !el ? true : false,
      );
      setTypeStatus(newStatusArray);
    }
  };

  return { typeStatus, clickHandler }
};