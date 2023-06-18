
export const getchekedListOptions = <
  T extends { checked: boolean; label: string }
>(
  category: T[]
): string[] => {
  return category.reduce((acc: string[], item: T) => {
    if (item.checked) {
      acc.push(item.label);
    }
    return acc;
  }, []);
};

export const filterTransport = <T extends {category: string}>(transportList: T[], chekedList: string[]) => {
  return transportList.reduce((acc: T[], transport) => {
    if (chekedList.includes(transport.category)) {
      acc.push(transport)
    }
    return acc
  },[])
}
