# 📚 Book Review API

A RESTful API for managing book reviews, supporting authentication, book listings with filters, and review operations. Built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

--------------------------------------------------

## 🚀 Project Setup Instructions

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

## 📦 How to Run Locally

- Ensure MongoDB is running.
- Make sure you have set the `.env` file.
- Launch the API with `node` or `nodemon`.
- Access it via Postman or `curl` at `http://localhost:5000`.

---
# 📚 Book Review API — CURL Command Examples

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
