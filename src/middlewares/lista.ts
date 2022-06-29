export function lista (colores: string[]): string{
    const coloresArray: string[] = []
    colores.forEach(color => {
        coloresArray.push(`<li style="color:${color}; background-color: black">${color}</li>`)
    });

    return coloresArray.join('')
}