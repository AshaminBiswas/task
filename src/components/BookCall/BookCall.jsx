import React from 'react'
import './BookCall.css'
const BookCall = () => {
  return (
    <div className='book-call'>
      <form >
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter Your Name ' id='name'/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'  placeholder='Enter Your Email'/>
        </div>
        <div>
            <label for="message" class="form-label"></label>
            <textarea class="form-control" name="" id="message" rows="3" placeholder='Enter Your Message'>
            </textarea>
        </div>

        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default BookCall
