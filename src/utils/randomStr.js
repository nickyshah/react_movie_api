

export const randomCharGenerator = () => {
    const st = "qwertyuiopasdfghjklzxcvbnm"
    const num = Math.floor(Math.random() * st.length)

    return st[num]
}