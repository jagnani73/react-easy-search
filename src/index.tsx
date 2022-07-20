const useSearch = (data: any): any => {
  switch (typeof data) {
    case "object": {
      (Array.isArray(data) ? data : Object.values(data)).forEach((value) =>
        useSearch(value)
      );
      break;
    }
    default: {
      console.log(data);
    }
  }
};

export { useSearch };
