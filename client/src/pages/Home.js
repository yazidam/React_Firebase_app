import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((x) => ({ ...x.data(), id: x.id })));
    };
    getPost();
  });
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id); //witch post delete
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postList.map((x) => (
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1>{x.title}</h1>
            </div>

            <div className="deletePost">
              {isAuth && x.author.id === auth.currentUser.uid && (
                <button
                  onClick={() => {
                    deletePost(x.id);
                  }}
                >
                  {" "}
                  &#128465;
                </button>
              )}
            </div>
          </div>
          <div className="postTextContainer"> {x.postText}</div>
          <h3>@{x.author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
