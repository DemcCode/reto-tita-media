import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/organisms/header/header';
import Modal from '../../components/organisms/modal/modal';
import { Image } from '../../components/atoms/image/image';
import { Button } from '../../components/atoms/button/button';
import { Text } from '../../components/atoms/text/text';
import { Span } from '../../components/atoms/span/span';
import { ClipLoader } from 'react-spinners';
import './style.css'

export const Home = () =>  {  
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState([]);
    const [loadingComment, setloadingComment] = useState(false);
    const [loadingPosts, setloadingPosts] = useState(false);
    const [showModalComment, setShowModalComment] = useState(false);  
    const [showModalOwner, setShowModalOwner] = useState(false); 
    const [userSelect, setUserSelect] = useState({});    

    useEffect(() => {     
        async function getPosts() {
            const headers = {
                'app-id': '63b75d0f1181ee14b202e985'
            };
            setloadingPosts(true);
            await axios.get('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109f4/post?limit=10',  { headers })
            .then(response => {
                setPosts(response.data.data);   
                setloadingPosts(false);       
            })
            .catch(error => {
                console.error(error);
            });
        }
        getPosts();
    }, []);   

    const getComments = async(id) =>{
        const headers = {
            'app-id': '63b75d0f1181ee14b202e985'
        };
        setloadingComment(true);
        await axios.get(`https://dummyapi.io/data/v1/post/${id}/comment?limit=10`,  { headers })
        .then(response => {
            setComment(response.data.data);  
            setloadingComment(false);         
        })
        .catch(error => {
            console.error(error);
        });
    } 

    const getPostTag = async(tag) => {  
        const headers = {
            'app-id': '63b75d0f1181ee14b202e985'
        };
        await axios.get(`https://dummyapi.io/data/v1/tag/${tag}/post?limit=10`,  { headers })
        .then(response => {
            setPosts(response.data.data);      
        })
        .catch(error => {
            console.error(error);
        });        
    }   

    const openModalOwner = (post) => {
        setShowModalOwner(true);
        setUserSelect(post)        
    }

    const closeModalOwner = () => {
        setShowModalOwner(false);  
    }

    const openModalComment = (id) => {
        setShowModalComment(true); 
        getComments(id)      
    }
    

    const closeModalComment = () => {
        setShowModalComment(false);
        setComment([]); 
    };

    const renderComments = () => (
        comment.length > 0 ? (comment.map((comment, index) => (  
            <div className="post-modal" key={index}>
                <div className="post-modal-header">
                    <Image src={comment.owner.picture} alt={"ImagenOwner"}/>
                    <Text text={comment.publishDate}/>
                </div>
                <Text text={comment.message}/>
            </div>                            
        ))): <Span text={'No hay comentarios'}/>     
    )

    const renderModalOwner=() => (
        <Modal isOpen={showModalOwner} onClose={() => setShowModalOwner(false)}>
            <div className="post-modal">
                <div className="post-modal-header">
                    <Image className="imgOwner" src={userSelect?.owner?.picture} alt={"ImagenOwner"}/>
                    <Text text={userSelect?.owner?.firstName+' '+userSelect?.owner?.lastName}/> 
                </div>
            </div> 
            <Button variant="modal" text={"X"} onClick={closeModalOwner} />
        </Modal>
    )

    const stylesLoading = {
        display: "flex",
        justifyContent: "center",
        margin: "0 auto"
    };

    return (
        <>
        <Header />
        <div className='posts-container'>
        {loadingPosts ? <ClipLoader
            cssOverride={stylesLoading}
            color={'#B8860B'}
            loading={loadingPosts}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />: posts.map((post, index) => (               
            <div className="posts" key={index}>
                <div className="post">
                    <div className="post-header">
                        <Image className="imgOwner" src={post.owner.picture} alt={"ImagenOwner"}/>                        
                        <Button  variant={'post'} text={post.owner.firstName+' '+post.owner.lastName} onClick={()=>openModalOwner(post)} />
                        {renderModalOwner(post)}
                    </div>
                    <div className="post-content">
                        <Image className="imgPost" src={post.image} alt={"ImagenPost"}/>
                        <Text text={post.text}/>     
                        <div className='tags-content'>
                            {
                                post.tags.map((tag, index) => (
                                    <Button key={index} variant="tag" text={tag} onClick={()=>getPostTag(tag)} />
                                ))
                            }                        
                        </div>                   
                        <i className='fa-regular fa-thumbs-up post-like'>{post.likes}</i>
                    </div>
                    <div className="post-footer">
                        <Button variant="post" text={"Comentarios"} onClick={()=>openModalComment(post.id)} />
                        <Modal isOpen={showModalComment} onClose={() => setShowModalComment(false)}>
                        {
                            loadingComment ? <ClipLoader
                            cssOverride={stylesLoading}
                            color={'#B8860B'}
                            loading={loadingComment}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />: renderComments()
                        }                        
                            <Button variant="modal" text={"X"} onClick={closeModalComment} />
                        </Modal>
                    </div>
                </div>               
            </div>
            ))}
        </div>
        </>
    )
}
