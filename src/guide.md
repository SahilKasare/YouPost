## Steps for building complete project
* Step 1: install dependensies
  * `@reduxjs/toolkit` `react-redux`
  * `react-router-dom`
  * `appwrite`
  * `@tinymce/tinymce-react`
  * `html-react-parser`
  * `react-hook-form`
* Setup the backend using Appwrite
* Step 2 : Setup Appwrite to setup the backend
  * setup the project and get the projectId
  * setup the database and get the databaseId
  * setup the collection with attributes and permissions and get the collectionId
  * setup the bucket for data storage and get the bucketId
* Step 3 : Setup the `conf` to store the variables name changed to string
* Step 4 : Setup the appwrite services about `authentication`
  * SignUp and SignIn using the documentation, create class and its object and export the object.
  * Also instead of creating the functions in the class create constructor, so that when the method is called then only it executes, preserving the resources.
  * get the functions from the documentation and add the function in the class only.
* Step 5 : Setup the appwrite services about `database` : `Post` in our case 
  * create post, delete post,  updatePost, getPost, getPosts.
* Step 6 : File Upload and File Delete about `storage` 
  * createFile,  deleteFile, getFilePreview
