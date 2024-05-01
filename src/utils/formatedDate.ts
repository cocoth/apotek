export const formatedDate = (date: Date) => {
    const D = String(date.getDate()).padStart(2, '0')
    const M = String(date.getMonth() + 1).padStart(2, '0')
    const Y = date.getFullYear()
    return `${D}-${M}-${Y}`
}

export const formatDateToISO = (dateString: string)=>{
    const parts = dateString.split('-')
    const Y = parts[0]
    const M = parts[1]
    const D = parts[2]
    return `${Y}-${M}-${D}T00:00:00Z`
}