export function formCurrency(value) {
  return new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
  }).format(value)
}

export function formNotCurrency(value) {
  return new Intl.NumberFormat('pt-Br', {
  minimumFractionDigits: 2
  }).format(value)
}

export function formPercent(value){
  return new Intl.NumberFormat('pt-Br', {
    style: 'percent',
    minimumFractionDigits: 2
  }).format(value)
} 

export function formPercentInt(value){
return new Intl.NumberFormat('pt-Br', {
  style: 'percent',
  }).format(value)
} 