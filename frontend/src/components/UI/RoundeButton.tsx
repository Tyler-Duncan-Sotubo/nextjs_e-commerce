import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const RoundeButton: FC<Props> = ({ children }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-violet-600 text-white py-2 px-4 font-display font-semibold hover:bg-violet-500 text-sm capitalize">
        {children}
      </button>
    </div>
  );
};

export default RoundeButton;
