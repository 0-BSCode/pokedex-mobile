const getStatBarLengthAndColor = (statValue: number) => {
    let style = {};

    if (statValue >= 100) {
        style = { width: "100%", backgroundColor: "#60a5fa" };
    } else if (statValue < 50) {
        style = { width: `${statValue}%`, backgroundColor: "#f87171" };
    } else {
        style = { width: `${statValue}%`, backgroundColor: "#4ade80" };
    }

    return style;
};

export default getStatBarLengthAndColor;
