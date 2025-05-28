let t = readline();
const HEX = parseInt(("#FFFFFF").slice(1), 16)


for (let i = 0; i < t; i++) {
    let hex = readline();
    const c = parseInt(hex.slice(1), 16);
    const result = Math.max(0, HEX - c);
    const finalRes = "#" + result.toString(16).padStart(6, '0').toUpperCase();
    console.log(finalRes);
}
