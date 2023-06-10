export const randomString = (): string => {
    const length = 10 // Desired length of the random string
    let result = ''

    for (let i = 0; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * 10) // Generate a random digit (0-9)
        result += randomDigit.toString()
    }

    return result
}
