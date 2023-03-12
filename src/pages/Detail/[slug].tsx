
export function reformatDate(fullDate : Date) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
}

