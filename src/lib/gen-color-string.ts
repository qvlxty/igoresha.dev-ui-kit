function hashCode(str: string) { 
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash
} 

function intToRGB(i: number ){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase()

    return "00000".substring(0, 6 - c.length) + c;
}

export const stringToColor = (str: string) => {
    return `#${intToRGB(hashCode(str))}`
}