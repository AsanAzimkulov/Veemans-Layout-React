type classNamesArgs = {
  className: string,
  condition: boolean
}

export default (item: classNamesArgs): string => {
  const { className, condition } = item;
  if (condition) {
    return " " + className;
  }
  return "";
}