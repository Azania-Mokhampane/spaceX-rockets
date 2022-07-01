import React from "react";

interface DateProps {
  date: string | null | undefined;
}

const LaunchDate = (props: DateProps) => {
  const setDate = new Date(props.date as Date | string);
  const year = setDate.getFullYear();
  const month = setDate.toLocaleString("en-US", { month: "long" });
  const day = setDate.getDate();

  return (
    <div className="flex gap-2 items-center justify-center">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default LaunchDate;
