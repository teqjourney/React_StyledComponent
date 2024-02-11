export const getCurrentDate = () => {
  const currentDate = new Date();

  // Get the month, day, and year from the Date object
  let month = (currentDate.getMonth() + 1).toString(); // getMonth() returns 0-11
  let day = currentDate.getDate().toString();
  const year = currentDate.getFullYear().toString();

  // Pad the month and day with leading zeroes if necessary
  month = month.padStart(2, "0");
  day = day.padStart(2, "0");

  // Combine the parts into a mm-dd-yyyy formatted string
  const formattedDate = `${month}-${day}-${year}`;
  return formattedDate;
};
