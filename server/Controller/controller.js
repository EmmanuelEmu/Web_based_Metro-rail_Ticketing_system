const getUser = (req,res)=>{
    res.status(200).json({
        name: "Emmanuel",
        age: 24,
        address: {
            city: "Dhaka",
            country: "Bangladesh"
        }
    })
}

const hello = (req, res) => {
    res.send("Hello World!");
  }

module.exports = {getUser, hello}