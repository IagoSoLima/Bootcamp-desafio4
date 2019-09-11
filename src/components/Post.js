import React from "react";

// import { Container } from './styles';

function PostHeader({ author, date }) {
  return (
    <div className="headerPost">
      <img className="avatar" src={author.avatar} alt="" />
      <div>
        <span className="Nome">{author.name}</span>
        <span className="Data">{date}</span>
      </div>
    </div>
  );
}

function PostBody({ content }) {
  return (
    <div className="bodyPost">
      <span>{content}</span>
    </div>
  );
}

function PostComment({ data }) {
  return (
    <div className="CommentPost">
      <div className="contentComment">
        <img className="avatar" src={data.author.avatar} alt="" />
        <p>
          <span className="ownerNameComment">{data.author.name}</span>
          {data.content}
        </p>
      </div>
    </div>
  );
}

export default function Post(props) {
  const { data } = props;

  return (
    <>
      <section className="Post">
        <PostHeader author={data.author} date={data.date} />
        <>
          <PostBody content={data.content} />
          <hr />
          {data.comments.map(comment => (
            <PostComment key={comment.id} data={comment} />
          ))}
        </>
      </section>
    </>
  );
}
