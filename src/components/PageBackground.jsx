import React from "react";

const backgroundStyle = {
    backgroundImage: [
        "radial-gradient(circle at 12% 16%, rgba(168, 85, 247, 0.16), transparent 28rem)",
        "radial-gradient(circle at 86% 82%, rgba(59, 130, 246, 0.14), transparent 30rem)",
        "radial-gradient(circle at 52% 48%, rgba(6, 182, 212, 0.08), transparent 34rem)",
    ].join(", "),
    contain: "paint",
    transform: "translateZ(0)",
};

function PageBackground() {
    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={backgroundStyle}
            aria-hidden="true"
        />
    );
}

export default React.memo(PageBackground);
