<main>
  <h2>Dashboard</h2>
</main>

<style>
  .container {
    overflow: hidden;
    display: block;
  }

  .container div {
    box-sizing: border-box;
    width: 25%;
    padding: 10px;
    float: left;
  }

  .image-gallery {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .image-gallery img {
    max-width: 70%;
    height: auto;
  }
   .textarea {
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    resize: vertical;
    height: 80px;
  }

  .textarea:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }

  .input {
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    margin-bottom: 10px;
    height: 40px;
  }

  .input:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }

  .button {
    height: 40px;
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 0.4s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    float: right;
  }

  .button:hover {
    background-color: #3e8e41; /* Dark green */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
  main {
    display: flex;
    justify-content: center;
  }

  div {
    margin: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  textarea, input {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    resize: vertical;
  }
</style>

