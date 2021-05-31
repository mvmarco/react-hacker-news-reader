import React, { useEffect,useState } from "react";
import LinkItem from '../links/LinkItem';
import Modal from './Modal'

let randomStories = [8700,8863,6456,4565133,45104];
export default function Api(){
const [stories,setStories] = useState([])
const [showModal, setShowModal] = useState(false)
const [kids,setKids] = useState([])

  useEffect(()=>{
    let newStories = [];
    randomStories.forEach(storyId=>{
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
      .then(j=>j.json())
      .then(d=>{
        newStories.push(d)
        setStories(newStories)
      })
    })
  },[])

  function showComments(list){
    setTimeout(() => {
        setShowModal(true)
    }, 2000);  
     let newKids = [];
    list.forEach(kidId=>{
      fetch(`https://hacker-news.firebaseio.com/v0/item/${kidId}.json?print=pretty`)
      .then(j=>j.json())
      .then(d=>{
        newKids.push(d)
        setKids(newKids)
      })
    })
  }

return (
  <div className="story-section">
    <h2 className="story-section">
      {" "}
      External important sources, click the story and check the comments
    </h2>
    <ul className="hacker-news-container">
      {stories.map((link, index) => (
        <li
          className="hacker-news-story"
          onClick={() => showComments(link.kids)}
        >
          {" "}
          {link.title}
        </li>
      ))}
      {showModal && <Modal setShowModal={setShowModal} kids={kids} />}
    </ul>
  </div>
);}