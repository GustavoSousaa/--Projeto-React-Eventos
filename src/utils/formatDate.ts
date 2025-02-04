export function formatDate(date: string | undefined) {
    if(!date) {
        return;
    }

    let formattedDate = new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        weekday: "short",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })

    const weekDay = formattedDate.substring(0, 3).replace(".", "").toUpperCase()
    const restOfTheDate = formattedDate.substring(4)

    formattedDate = weekDay + restOfTheDate

    return formattedDate
}