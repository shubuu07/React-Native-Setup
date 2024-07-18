
const PriceFormater = ({ price, digits }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: digits || 0,
  }).format(price / 1)
}

export default PriceFormater    