// import React, { useState } from "react";
// import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
//
// import { Textarea } from "flowbite-react";
//
// const UploadBook = () => {
//   const bookCategories = [
//     "Fiction",
//     "Non-Fiction",
//     "Mistery",
//     "Programming",
//     "Science Fiction",
//     "Fantasy",
//     "Horror",
//     "Bibligraphy",
//     "Autobigraphy",
//     "History",
//     "Self-help",
//     "Memoir",
//     "Business",
//     "Children Books",
//     "Travel",
//     "Religion",
//     "Art and Design"
//   ];
//
//   const [selectedBookCategory, setSelectedBookCategory] = useState(
//     bookCategories[0]
//   );
//
//   const handleChangeSelectedValue = (event) => {
//     console.log(event.target.value);
//     setSelectedBookCategory(event.target.value);
//   };
//
//   const handleBookSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//
//     const bookTitle = form.bookTitle.value;
//     console.log(bookTitle);
//   };
//
//   return (
//     <div className=" px-4 my-12">
//       <h2 className=" mb-8 text-3xl font-bold">Upload A Book</h2>
//
//       <form
//         onSubmit={handleBookSubmit}
//         className="flex lg:w-[1180px] flex-col flex-wrap gap-4 "
//       >
//         {/* First Row */}
//         <div className=" flex gap-8 ">
//           <div className=" lg:w-1/2">
//             <div className="mb-2 block">
//               <Label htmlFor="booktitle" value="Book Title" />
//             </div>
//             <TextInput
//               id="booktitle"
//               placeholder="Book name"
//               required
//               type="text"
//             />
//           </div>
//           {/* Author Name */}
//           <div className=" lg:w-1/2">
//             <div className="mb-2 block">
//               <Label htmlFor="authorName" value="Author Name" />
//             </div>
//             <TextInput
//               id="authorName"
//               placeholder="Author Name"
//               required
//               type="text"
//             />
//           </div>
//         </div>
//         {/* 2nd Row */}
//         <div className=" flex gap-8 ">
//           <div className=" lg:w-1/2">
//             <div className="mb-2 block">
//               <Label htmlFor="imageURL" value="Book Image URL" />
//             </div>
//             <TextInput
//               id="imageURL"
//               placeholder="Image URL"
//               required
//               type="text"
//             />
//           </div>
//           {/* Category */}
//           <div className=" lg:w-1/2">
//             <div className="mb-2 block">
//               <Label htmlFor="inputState" value="Book Category " />
//             </div>
//
//             <Select
//               id="inputState"
//               name="categoryName"
//               className=" w-full rounded"
//               value={selectedBookCategory}
//               onChange={handleChangeSelectedValue}
//             >
//               {bookCategories.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </Select>
//           </div>
//         </div>
//
//         {/* bookDescription */}
//         <div id="textarea">
//           <div className="mb-2 block">
//             <Label htmlFor="bookDescription" value="Book Description" />
//           </div>
//           <Textarea
//             id="bookDescription"
//             name="bookDescription"
//             placeholder="Book Description"
//             className=" w-full"
//             required
//             rows={6}
//           />
//         </div>
//
//         {/* Large Input Pin */}
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="bookPDFURL" value="Book PDF URL" />
//           </div>
//           <TextInput
//             id="bookPDFURL"
//             placeholder="Enter PDF URL"
//             required
//             type="text"
//             name="bookPDFURL"
//           />
//         </div>
//         <Button className=" mt-5" type="button">
//           Upload Book
//         </Button>
//       </form>
//     </div>
//   );
// };
//
// export default UploadBook;

import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea
} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibligraphy",
    "Autobigraphy",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authName = form.bookTitle.value;

    console.log(bookTitle);
  };

  return (
    <div className=" px-4 my-12">
      <h2 className=" mb-8 text-3xl font-bold">Upload A Book</h2>
      <form
        // onChange={handleChangeSelectedValue}
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4 "
      >
        {/* First Row */}
        <div className=" flex gap-8 ">
          {/* bookTitle */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book name" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book name"
              required
              type="text"
            />
          </div>
          {/* authName */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authName" value="Author name" />
            </div>
            <TextInput
              id="authName"
              name="authName"
              placeholder="Author name"
              required
              type="text"
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className=" flex gap-8 ">
          {/* bookTitle */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book image URL"
              required
              type="text"
            />
          </div>
          {/* category */}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className=" w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>{" "}
        {/* bookDescription */}
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Book Description"
            className=" w-full"
            required
            rows={6}
          />
        </div>
        {/* Large Input Pin */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            name="bookPDFURL"
            id="bookPDFURL"
            placeholder="Enter PDF URL"
            required
            type="text"
          />
        </div>{" "}
        <Button className=" mt-5" type="button">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
