import { useCallback } from "react";

export const useSearch = (inputData: any, input: string) => {
  const results: any[] = [];

  const search = useCallback(
    (data: any) => {
      switch (typeof data) {
        case "object": {
          (Array.isArray(data) ? data : Object.values(data)).forEach((value) =>
            search(value)
          );
          break;
        }
        default: {
          if (input && `${data}`.toLowerCase().includes(input.toLowerCase()))
            results.push(data);
        }
      }
    },
    [input]
  );

  search(inputData);

  console.log(input);

  return { results };
};
