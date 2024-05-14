const getStatBarColor = (statValue: number) => {
    console.log(statValue);

    if (statValue >= 100) {
        return "h-full bg-green-400 block rounded-full w-[30%]";
    } else if (statValue < 50) {
        console.log("less");
        return `h-full bg-red-400 block rounded-full w-[30%]`;
    } else {
        return `h-full bg-green-400 block rounded-full w-[30%]`;
    }
};

const getStatBarLength = (statValue) => {
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
