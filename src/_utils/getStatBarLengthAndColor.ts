const getStatBarColor = (statValue: number) => {
    return statValue >= 100
        ? "h-full bg-blue-400 block rounded-full pr-3"
        : statValue < 50
          ? "h-full bg-red-400 block rounded-full"
          : "h-full bg-green-400 block rounded-full";
};

const getStatBarLength = (statValue: number) => {
    let style = {};

    if (statValue >= 100) {
        style = { width: "100%" };
    } else if (statValue < 50) {
        style = { width: `${statValue}%` };
    } else {
        style = { width: `${statValue}%` };
    }

    return style;
};

export { getStatBarColor, getStatBarLength };
