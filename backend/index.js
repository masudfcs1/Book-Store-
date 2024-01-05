const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const colors = require("colors");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//HlcO96zfJpSzspnT

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Mongodb Configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mern-book-store:HlcO96zfJpSzspnT@cluster0.cqs0bet.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const bookcollections = client.db("BookInventory").collection("book");

    // insert a book to the db: POST METHOD
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookcollections.insertOne(data);
      res.send(result);
    });

    // get all books from the db: GET METHOD

    app.get("/all-books", async (req, res) => {
      const book = bookcollections.find();
      const result = await book.toArray();
      res.send(result);
    });

    // update a book data : patch or update methods
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updatedBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updatedBookData
        }
      };
      const options = { upsert: true };
      const result = await bookcollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollections.deleteOne(filter);
      res.send(result);
    });

    // To get Single Book Date
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookcollections.findOne(filter);
      res.send(result);
    });

    //Find by Category

    // app.get("/all-books", async(req, res) => {
    //     let query = {};
    //     if (req.query ? .category) {
    //         query = { category: req.query.category };
    //     }
    //     const result = await bookcollections.find(query).toArray()
    //     res.send(result)
    // });
    //
    // app.get("/all-books", async(req, res) => {
    //     let query = {}
    //     if (req.query ? .category) {
    //         query = { category: req.query.category }
    //     }
    //     const result = await bookcollections.findOne(query).toArray()
    //     res.send(result)
    // })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment.You successfully connected to MongoDB!".bgMagenta
        .underline.bold
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`http://localhost:${port}`.underline.bgBlue.bold);
});
