export const getHoursOptions = (length = 24) => {
    return Array.from({ length }, (_, i) => {
        const n = i + 1
        return {
            value: n,
            label: `${String(n).padStart(2, "0")} Hour${n > 1 ? "s" : ""}`
        }
    })
}