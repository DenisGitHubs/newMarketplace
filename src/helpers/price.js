export const formatPrice = (initialPrice) => {
    const parts = initialPrice.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');
    const formattedPrice = parts.join('.') + ' ₽';
    return formattedPrice;
}