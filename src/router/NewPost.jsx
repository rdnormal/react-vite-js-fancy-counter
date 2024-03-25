import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({ request }) {
  // triggered when the Form submitted
  const formData = await request.formData(); // get the Form data object
  const postData = Object.fromEntries(formData); // get the key-value pair base on the name attributes. e.g. {body: '...', author: '...'}
  // console.log(postData);
  // console.log(JSON.stringify(postData));
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData), // converts a JavaScript value(object) to a JSON string
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/"); // redirect after the action been execute
}
