
export function formatDate(inputDateStr) {
    const date = new Date(inputDateStr);
    const day = String(date.getDate()); 
    const month = String(date.getMonth() + 1); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
 