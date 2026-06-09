import React from "react";

function GlassBox({ image }) {
  return (
    <div className="relative w-25 h-25 md:w-32 md:h-32 2xl:w-40 2xl:h-40 flex items-center justify-center 
                 bg-[#dac5a7]/7 backdrop-blur-sm border border-white/10 shadow-[0_8px_22px_0_rgba(0,0,0,0.28)] rounded-2xl before:absolute before:-inset-[2px] before:bg-linear-to-br
                before:from-#C5B297
                before:to-yellow-500/10 before:rounded-2xl before:blur-sm before:-z-10">
      <img
        src={image}
        alt=""
        className="w-[70%] h-[70%] object-contain"
        decoding="async"
        draggable="false"
      />
    </div>
  );
}

export default React.memo(GlassBox);
