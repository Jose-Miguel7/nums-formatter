export default function formatNumber(num: string | number): string {
    if (num === null || num === undefined) {
        return '0';
    }

    // Convertir a string
    num = num.toString();

    // Separar la parte entera y la parte decimal
    const [integerPart, decimalPart] = num.split('.');

    // Verificar si el número es negativo
    const isNegative = integerPart.startsWith('-');
    const absoluteIntegerPart = isNegative ? integerPart.substring(1) : integerPart;

    // Invertir la parte entera
    let reversedNum = absoluteIntegerPart.split('').reverse().join('');
    let parts: string[] = [];

    // Dividir en partes de tres dígitos
    for (let i = 0; i < reversedNum.length; i += 3) {
        parts.push(reversedNum.substring(i, i + 3));
    }

    // Volver a unir las partes y revertir de nuevo
    let formattedNum = parts.map(part => part.split('').reverse().join('')).reverse().join('.');

    // Añadir el signo negativo si es necesario
    if (isNegative) {
        formattedNum = '-' + formattedNum;
    }

    // Añadir la parte decimal si existe
    if (decimalPart) {
        formattedNum += ',' + decimalPart;
    }

    return formattedNum;
}
