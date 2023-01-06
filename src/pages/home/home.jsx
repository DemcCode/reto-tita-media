import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/organisms/header/header';
import Modal from '../../components/organisms/modal/modal';
import { Image } from '../../components/atoms/image/image';
import { Button } from '../../components/atoms/button/button';
import { Text } from '../../components/atoms/text/text';
import './style.css'

export const Home = () =>  { 
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState([]);
    const [showModalComment, setShowModalComment] = useState(false);  
    const [showModalOwner, setShowModalOwner] = useState(false);       
       
    useEffect(() => {     
        async function getPosts() {
            const headers = {
                'app-id': '63b75d0f1181ee14b202e985'
            };
            axios.get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10',  { headers })
            .then(response => {
                setPosts(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
        }
        getPosts();
    }, []);

    useEffect(() => {    
        async function getComments() {
            const headers = {
                'app-id': '63b75d0f1181ee14b202e985'
            };
            axios.get('https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',  { headers })
            .then(response => {
                setComment(response.data.data);            
            })
            .catch(error => {
                console.error(error);
            });
        }
        getComments();
    }, []);

    const openModalOwner = () => {
        setShowModalOwner(true);        
    }

    const closeModalOwner = () => {
        setShowModalOwner(false);        
    }

    const openModalComment = () => {        
        setShowModalComment(true);
      };
    
      const closeModalComment = () => {
        setShowModalComment(false);
      };

    return (
        <>
        <Header />
        <div className='posts-container'>
        {posts.map((post, index) => (               
            <div className="posts" key={index}>
                <div className="post">
                    <div className="post-header">
                        <Image className="imgOwner" src={post.owner.picture} alt={"ImagenOwner"}/>                        
                        <Button className="buttonPost" text={post.owner.firstName+' '+post.owner.lastName} onClick={openModalOwner} />
                        <Modal isOpen={showModalOwner} onClose={() => setShowModalOwner(false)}>
                            <div className="post-modal" key={index}>
                                <div className="post-modal-header">
                                    <Image className="imgOwner" src={post.owner.picture} alt={"ImagenOwner"}/>
                                    <Text text={post.owner.firstName+' '+post.owner.lastName}/> 
                                </div>
                            </div> 
                            <Button className="button" text={"Cerrar"} onClick={closeModalOwner} />
                        </Modal>
                    </div>
                    <div className="post-content">
                        <Image className="imgPost" src={post.image} alt={"ImagenPost"}/>
                        <Text text={post.text}/> 
                        <span>Falta tags</span>
                        <span>Likes= {post.likes}</span>
                    </div>
                    <div className="post-footer">
                        <Button className="buttonPost" text={"Comentarios"} onClick={openModalComment} />
                        <Modal isOpen={showModalComment} onClose={() => setShowModalComment(false)}>
                        {comment.map((comment, index) => (  
                            <div className="post-modal" key={index}>
                                <div className="post-modal-header">
                                    <Image src={comment.owner.picture} alt={"ImagenOwner"}/>
                                    <Text text={comment.publishDate}/>
                                </div>
                                <Text text={comment.message}/>
                            </div>                            
                        ))}
                            <Button className="button" text={"Cerrar"} onClick={closeModalComment} />
                        </Modal>
                    </div>
                </div>               
            </div>
            ))}
        </div>
        </>
    )
}
