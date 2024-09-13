const express = require('express');
const PORT = 3000;
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/sales", (req, res)=>{
    res.json([
        { x: 50, y: 7 },
        { x: 60, y: 8 },
        { x: 70, y: 8 },
        { x: 80, y: 9 },
        { x: 90, y: 9 },
        { x: 100, y: 9 },
        { x: 110, y: 10 },
        { x: 120, y: 11 },
        { x: 130, y: 14 },
        { x: 140, y: 14 },
        { x: 150, y: 15 },
    ]);
});
app.get("/visitors", (req, res)=>{
    res.json({
        day:[1,2,3,4,5,6,7,8,9,10],
        count:[3, 6, 10, 2, 32, 19, 9, 8, 16, 7],
    })
});
app.get("/top_products", (req, res)=>{
    res.json({
        product:["Iphone 16","JBL c15","Dell XPS 16","Pixel 8 pro","LG G8"],
        count:[3, 6, 10, 2, 32]
    })
});
app.get("/sold_products_by_categories",(req, res)=>{
    res.json({
        category: ["Phones","Headphones","Laptops","Chargers","TVs"],
        count:[23,67,12,60,15]
    });
});
app.get("/message",(req, res)=>{
    res.json({
        message:"Data was received"
    })
});
app.post("/data",(req,res)=>{
    res.redirect("/message");
});
app.get("/products/all",(req,res)=>{
    res.json([
        { Id: 1, Name: "Laptop", Price: 1000, Quantity: 10, Description: "High-end gaming laptop" },
        { Id: 2, Name: "Phone", Price: 600, Quantity: 25, Description: "Latest smartphone" },
        { Id: 3, Name: "Tablet", Price: 300, Quantity: 15, Description: "10-inch display tablet" },
        { Id: 4, Name: "Headphones", Price: 150, Quantity: 30, Description: "Noise-cancelling headphones" },
        { Id: 5, Name: "Smartwatch", Price: 250, Quantity: 20, Description: "Fitness tracker smartwatch" },
        { Id: 6, Name: "Camera", Price: 800, Quantity: 5, Description: "DSLR camera with 24MP sensor" },
        { Id: 7, Name: "Monitor", Price: 200, Quantity: 12, Description: "27-inch 4K monitor" },
        { Id: 8, Name: "Keyboard", Price: 50, Quantity: 40, Description: "Mechanical keyboard" },
        { Id: 9, Name: "Mouse", Price: 30, Quantity: 35, Description: "Wireless optical mouse" },
        { Id: 10, Name: "Printer", Price: 150, Quantity: 8, Description: "All-in-one printer" },
        { Id: 11, Name: "External Hard Drive", Price: 100, Quantity: 18, Description: "1TB external hard drive" },
        { Id: 12, Name: "Router", Price: 75, Quantity: 20, Description: "Wi-Fi 6 router" },
        { Id: 13, Name: "Speakers", Price: 120, Quantity: 22, Description: "Bluetooth speakers" },
        { Id: 14, Name: "Graphics Card", Price: 500, Quantity: 10, Description: "High-performance GPU" },
        { Id: 15, Name: "Flash Drive", Price: 20, Quantity: 50, Description: "32GB USB flash drive" }
    ]
);
})
app.get("/dash_stats",(req, res)=>{
    res.json({
        users: 46,
        products: 123,
        sales:67,
        profit: 23000,
    });
});
app.listen(PORT, ()=>{
    console.log(`server started listening on port ${PORT}`);
});