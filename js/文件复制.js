const fs = require("fs")

data = fs.readFileSync("自不量力.mp4")

fs.writeFileSync("自不量力-2.mp4", data)


rs = fs.ReadStream("自不量力.mp4")
ws = fs.WriteStream("自不量力-3.mp4")

rs.on("data",chunk=>{
    ws.write(chunk)
})



