export const calculateTimeToEvent = () => {
  // October 25,2023 9:00 AM
  const eventDate = new Date("2023-10-25T09:00:00");
  const currentDate = new Date();
  const diff = eventDate.getTime() - currentDate.getTime();
  const timeRemaining = eventDate.getTime() - currentDate.getTime();
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};
