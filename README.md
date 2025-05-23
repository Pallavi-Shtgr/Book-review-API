# Book Review API

A RESTful API for managing book reviews, supporting authentication, book listings with filters, and review operations. Built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

--------------------------------------------------

## Project Setup Instructions

1. **Clone the repository:**
2. git clone https://github.com/your-username/book-review-api.git
cd book-review-api
-----------------------------------------------------------

2. **Install dependencies:**
---------------------------------------------------------------

3. **Create `.env` file** with:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

-------------------------------------------------------------------

4. **Run the server:**
node server.js
Or use:
nodemon server.js
-----------------------------------------------------------------

##  How to Run Locally

- Ensure MongoDB is running.
- Make sure you have set the `.env` file.
- Launch the API with `node` or `nodemon`.
- Access it via Postman or `curl` at `http://localhost:5000`.

---
# Book Review API — CURL Command Examples

---

## 1. POST /books — Add a new book (Authenticated users only)

curl -X POST http://localhost:5000/books \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "description": "A novel set in the 1920s..."
}'

---

## 2. GET /books — Get all books (pagination & optional filters)

curl "http://localhost:5000/books?page=1&limit=10&author=Fitzgerald&genre=Classic"

---

## 3. GET /books/:id — Get book details by ID (includes average rating and paginated reviews)

curl "http://localhost:5000/books/BOOK_ID?page=1&limit=5"

---

## 4. POST /books/:id/reviews — Submit a review (Authenticated, one review per user per book)

curl -X POST http://localhost:5000/books/BOOK_ID/reviews \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "rating": 5,
  "comment": "Amazing book!"
}'

---

## 5. PUT /reviews/:id — Update your own review

curl -X PUT http://localhost:5000/reviews/REVIEW_ID \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-H "Content-Type: application/json" \
-d '{
  "rating": 4,
  "comment": "Updated my review."
}'

---

## 6. DELETE /reviews/:id — Delete your own review

curl -X DELETE http://localhost:5000/reviews/REVIEW_ID \
-H "Authorization: Bearer YOUR_JWT_TOKEN"

---

## 7. GET /search — Search books by title or author (partial and case-insensitive)

curl "http://localhost:5000/search?query=Rowling"

---

<sub>Notes:</sub>  
<sub>- Replace YOUR_JWT_TOKEN with your actual JWT token.</sub>  
<sub>- Replace BOOK_ID and REVIEW_ID with actual IDs from your database.</sub>  
<sub>- Pagination params (page, limit) are optional.</sub>

---------------------------------------------------------

## 1. POST - Signup

![1  POST - signup( testuser2)](https://github.com/user-attachments/assets/26d1350f-2b86-4639-9b5a-0951970ccb89)


## 2. POST - Login

![2  POST  - login](https://github.com/user-attachments/assets/9479a313-bd54-4bdd-824a-228d34e0f51e)


## 3. POST - Add New Book

![3  POST - add new book](https://github.com/user-attachments/assets/1eff9000-a40e-411c-b021-9e3a4a14655f)


## 4. GET - All Books with Filtered

![4  GET - all books with filtered](https://github.com/user-attachments/assets/9b975146-1a2c-480c-8cce-5de059d0db40)


## 5. GET - All Books with Pagination
![4  GET - all books with pagination](https://github.com/user-attachments/assets/912e57e5-6b4a-42ee-94a4-da5a6de6d3e9)


## 6. GET - All Books

![4 GET - all books](https://github.com/user-attachments/assets/e9eecffd-6322-4780-a52e-bd4204fa9e7b)


## 7. GET - Details of the Book

![5  GET - deatils of the book](https://github.com/user-attachments/assets/8f37eef1-44c7-4900-a500-5d38c3e490ef)


## 8. POST - Submit a Review

![6  POST - submit a review](https://github.com/user-attachments/assets/75286957-7001-4da8-8f87-c23b747c45c9)

## 9. PUT - Update the Details

![7 PUT - update the details](https://github.com/user-attachments/assets/e97841d4-e68a-4bb0-882f-f70bf77e61f2)


## 10. DELETE - Review Deletion

![8  DELETE - review deletion](https://github.com/user-attachments/assets/70b0e36c-fbe0-4003-876e-f10712ee3f08)


## 11. GET - Search by Author

![9  GET - search by author](https://github.com/user-attachments/assets/c427e235-b341-4aab-affd-5b1b652fe3f9)

## 12. GET - Search by Title (Raw Form)

![9  GET - search by title (raw form)](https://github.com/user-attachments/assets/db9e6c74-a3ff-4a39-9e66-c3582cfdd877)


## 13. GET - Search by Title

![9  GET - search by title](https://github.com/user-attachments/assets/d01c3fa9-b911-4f34-b5e5-38e54de0738c)


