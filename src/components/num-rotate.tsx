import { cn } from "@/utils/tailwind-util";

const NUM_OF_NUMBERS = 60;
const ANIMATION_DURATION = 200;

export const NumberRotation = ({ number }: { number: number }) => {
  const numbers = Array.from({ length: NUM_OF_NUMBERS }, (_, i) => i);

  const getClass = (num: number) => {
    if (number === num) return "opacity-100 transform-none";
    if (number > num) return "opacity-0 -translate-y-2";
    return "opacity-0 translate-y-2";
  };

  return (
    <div className="relative h-10 w-10">
      {numbers.map((num) => (
        <div
          key={num}
          className={cn(
            "w-full h-full absolute transition-all duration-" +
              ANIMATION_DURATION,
            getClass(num)
          )}
        >
          {num}
        </div>
      ))}
    </div>
  );
};
