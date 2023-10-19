export function Transposicion(message, key) {
    if (typeof key !== 'number' || key <= 2 || key >= message.length) {
        return "Clave invalida";
    }
    const rows = [];
    for (let i = 0; i < key; i++) {
        rows.push('');
    }
    
    for (let i = 0; i < message.length; i++) {
        const rowIndex = i % key;
        rows[rowIndex] += message[i];
    }
    
    const messageEncriptado = rows.join('');
    return messageEncriptado;
}

export function DescifradoTransposicion(encrypt, key) {
    
    if (typeof key !== 'number' || key <= 2 || key >= mensaje.length) {
        return "Clave invalida";
    }
    
    const Ncantidad = encrypt.length;
    const filas = [];
    for (let i = 0; i < key; i++) {
        const Nfilas = Math.ceil(Ncantidad / key);
        filas.push('');
    }
    //e = posicion de la fila
    let Nposicion = 0;
    for (let e = 0; e < key; e++) {
        const Nfilas = Math.ceil(Ncantidad / key);
        const tam = (e < Ncantidad % key) ? Nfilas : Nfilas - 1;
        filas[e] = encrypt.slice(Nposicion, Nposicion + tam);
        Nposicion += tam;
    }
    
    let menDes = '';
    for (let i = 0; i < Ncantidad; i++) {
        const PosicionFila = i % key;
        menDes += filas[PosicionFila][0];
        filas[PosicionFila] = filas[PosicionFila].substring(1);
    }
    
    return menDes;
}