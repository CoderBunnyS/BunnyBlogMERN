// Removed unused import

function CommentForm() {
    return (
        <form>
        <h3>Add to the conversation:</h3>
        <br></br>
            <div>
            <label htmlFor="username" className="text-gray-600 text/sm">
          User Name
        </label>
        <input
          type="text"
          placeholder="Your User Name"
          value={Comment.username}
        //   onChange={(e) => setUserName({ ...blog, title: e.target.value })}
        />
            </div>
            

            <div>
            <label htmlFor="email" className="text-gray-600 text/sm">
         Email Address
        </label>
        <input
          type="text"
          placeholder="Email Address"
          value={Comment.email}
        //   onChange={(e) => setUserName({ ...blog, title: e.target.value })}
        />
            </div>
            <div>
            <label htmlFor="comment" className="text-gray-600 text/sm">
          Comment
        </label>
        <input
          type="text"
          placeholder="Your Comment"
          value={Comment.comment}
        //   onChange={(e) => setUserName({ ...blog, title: e.target.value })}
        />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
      );
    }

export default CommentForm