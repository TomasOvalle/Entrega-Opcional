import usersManager from "../data/fs/UsersManager.fs.js";

export default async socket => {
    console.log(socket.id);
    socket.emit("usersForm", await usersManager.read())
    socket.on("registerUser", async data => {
        await usersManager.create(data)
        socket.emit("usersForm", await usersManager.read())
    })
}